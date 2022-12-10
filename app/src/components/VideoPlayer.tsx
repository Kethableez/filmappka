import React, { useState } from "react";
import Webcam from "react-webcam";
import { Link } from "react-router-dom";

export let dupa = null;
const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};
export const WebcamCapture = () => {
  const [imgSrc, setImgSrc] = useState(null);
  const webcamRef = React.useRef<any>();
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);
  return (
    <>
      <Webcam
        audio={false}
        height={400}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={400}
        videoConstraints={videoConstraints}
      />
      <div className="row padding">
        <button onClick={capture}>Capture photo</button>
        <button>
          <Link to="/">Back</Link>
        </button>
        <button>
          <Link to="/films">Filmy</Link>
        </button>
      </div>

      {imgSrc && <img src={imgSrc} />}
    </>
  );
};
