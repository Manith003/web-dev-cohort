import { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";
import axios from "axios";

export default function FacialExpression({ setSongs }) {
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
    axios
      .get(`http://localhost:3001/songs?mood=${_expression}`)
      .then((response) => {
       setSongs(response.data.songs);
      });  
  }

  useEffect(() => {
    loadModels().then(startVideo);
  }, []);

  return (
     <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 py-10 md:py-16">
      
      {/* Video Section */}
      <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col items-center">
        <h1 className="text-3xl font-bold pb-4 text-center">Let’s find your vibe</h1>
        <div className="w-full aspect-video overflow-hidden rounded-2xl shadow-lg">
           <video ref={videoRef} autoPlay muted playsInline className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Text and Button Section */}
      <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col justify-center text-center md:text-left">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Live Mood Detection
          </h2>
          <p className="text-neutral-300 text-lg">
            Your mood is analyzed instantly using AI. Whether you’re happy, calm, or sad — Moody Player picks the perfect track to match your vibe.
          </p>
        </div>
        <div className="mt-8">
          <button
            className="bg-cyan-500 text-black font-bold py-3 px-8 rounded-full text-lg 
                       cursor-pointer transition-all duration-300 
                       hover:bg-cyan-400 hover:scale-105"
            onClick={detectMood}
          >
            Detect My Mood
          </button>
        </div>
      </div>
    </div>
  );
}
