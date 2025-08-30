import React, { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";

export default function FacialExpression() {
  const videoRef = useRef();

  useEffect(() => {
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

    const handleVideoPlay = () => {
      setInterval(async () => {
        const detections = await faceapi
          .detectAllFaces(
            videoRef.current,
            new faceapi.TinyFaceDetectorOptions()
          )
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
      }, 1000);
    };
    loadModels().then(startVideo);

    if (videoRef.current) {
      videoRef.current.addEventListener("play", handleVideoPlay);
    }
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        style={{ width: "720px", height: "560px" }}
      />
    </div>
  );
}
