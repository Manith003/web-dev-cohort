import  { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";

export default function FacialExpression() {
  const videoRef = useRef();

  const loadModels = async () => {
    const MODEL_URL = "/models";
    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
  };

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error("Error accessing webcam: ", err));
  };

  async function detectMood() {
    const detections = await faceapi
      .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();
    let mostPosibleExpression = 0;
    let _expression = "";

    if (!detections[0] || detections.length == 0) {
      console.log("no face detection");
      return;
    }

    for (const [expression, value] of Object.entries(
      detections[0].expressions
    )) {
      if (value > mostPosibleExpression) {
        mostPosibleExpression = value;
        _expression = expression;
      }
    }
    console.log(_expression);
  }

  useEffect(() => {
    loadModels().then(startVideo);
  }, []);

  return (
    <div className="bg-neutral-700 px-45 py-15 flex  gap-5">
      <div className="w-[40%] flex flex-col items-center">
        <h1 className="text-2xl font-bold pb-3 pl-1">Let’s find your vibe</h1>
        <video
          ref={videoRef}
          autoPlay
          muted
          className="rounded-4xl bg-amber-700"
        />
      </div>

      <div className="w-[25%] ml-15 flex flex-col justify-center">
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl font-bold">Live Mood Detection</h2>
          <p className="">
            Your mood is analyzed instantly using AI. Whether you’re happy, calm, sad, or excited — Moody Player picks the perfect track to match your vibe
          </p>
        </div>
        <div className="mt-5">
          <button
            className="bg-neutral-800 text-black py-2 px-4 rounded-xl cursor-pointer hover:bg-blue-600"
            onClick={detectMood}
          >
            Detect My Mood
          </button>
        </div>
      </div>
    </div>
  );
}
