import React, { useState } from "react";
import Webcam from "react-webcam";
import { Link } from "react-router-dom";


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
    <div className="photosM phoM"> 
    <Webcam
    
        audio={false}
        height={900}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={900}
        videoConstraints={videoConstraints}
      />
      {imgSrc && <img  src={imgSrc} />}
      </div>
     
      <div className="row padding">
        <button onClick={capture}>Capture photo</button>
       
        
      </div>

      
    </>
  );
};
