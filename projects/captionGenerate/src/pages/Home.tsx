import { useState, useMemo } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/ui/file-upload";
import { SpinnerCustom } from "@/components/ui/spinner";
import { toast } from "sonner";

const API_URL = "http://localhost:3000/api/posts";

type ParsedCaption = {
  id: string;
  number: number;
  caption: string;
  hashtags: string;
  fullTextForCopy: string;
};

const Home = () => {
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [newPost, setNewPost] = useState<{
    image: string;
    caption: string;
  } | null>(null);

  const handleFileChange = (newFiles: File[]) => {
    if (newFiles.length > 0) {
      setFileToUpload(newFiles[0]);
      setNewPost(null);
      setError(null);
    }
  };

  const handleGenerateCaption = async () => {
    if (!fileToUpload) {
      setError("Please upload an image first.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setNewPost(null);
    const formData = new FormData();
    formData.append("image", fileToUpload);
    try {
      const response = await axios.post(API_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      if (response.status === 201) {
        setNewPost(response.data.post);
      }
    } catch (err: any) {
      console.error(err);
      setError(
        err.response?.data?.message ||
          "An error occurred while generating the post."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const parsedCaptions = useMemo(() => {
    if (!newPost?.caption) {
      return [];
    }

    const parts = newPost.caption.split(/\d+\.\s/).filter(Boolean);

    return parts
      .map((part, index) => {
        const trimmedPart = part.trim();

        const [captionText, hashtagsText] =
          trimmedPart.split(/\s*Hashtags:\s*/);

        if (!captionText || !hashtagsText) {
          console.warn("Skipping unparseable caption part:", trimmedPart);
          return null;
        }

        const finalCaption = captionText.trim();
        const finalHashtags = hashtagsText.trim().replace(/,$/, "");

        const fullTextForCopy = `${finalCaption} Hashtags: ${finalHashtags}`;

        return {
          id: `caption-${index}`,
          number: index + 1,
          caption: finalCaption,
          hashtags: finalHashtags,
          fullTextForCopy: fullTextForCopy,
        };
      })
      .filter(Boolean) as ParsedCaption[];
  }, [newPost]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast.success("Caption copied to clipboard!");
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-extrabold mb-4 text-center font-[font1]">
        Turn Your Image into Words
      </h2>

      <FileUpload onChange={handleFileChange} />
      <Button
        onClick={handleGenerateCaption}
        className="mt-4 w-full cursor-pointer text-white"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <SpinnerCustom />
            <span className="ml-2">Generating...</span>
          </>
        ) : (
          <span>Generate Caption</span>
        )}
      </Button>

      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
          <p>Error: {error}</p>
        </div>
      )}

      {newPost && (
        <div className="mt-8">
          <img
            src={newPost.image}
            alt="Uploaded post"
            className="w-full object-cover rounded-lg border border-gray-200 shadow-sm mb-8"
          />

          <ul className="space-y-6">
            {parsedCaptions.map((cap) => (
              <li key={cap.id} className="relative flex items-start space-x-4">
                <div className="flex-grow">
                  <div className="flex items-center space-x-3">
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded bg-blue-100 text-blue-800 font-bold text-sm">
                      {cap.number}
                    </span>
                    <p className="text-gray-900 text-base">{cap.caption}</p>
                  </div>
                  <p className="mt-1 text-gray-600 pl-8">
                    Hashtags: {cap.hashtags}
                  </p>
                </div>
                <Button
                  onClick={() => handleCopy(cap.fullTextForCopy)}
                  variant="ghost"
                  size="sm"
                  className="flex-shrink-0 text-black hover:text-blue-800"
                >
                  Copy
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
