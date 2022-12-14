import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaEyeSlash, FaEye } from "react-icons/fa";
import { WebcamCapture } from "./VideoPlayer";
import Webcam from "react-webcam";
function RegistrationForm() {
  const [username, setUsername] = useState();
  

  

  
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };
  const [imgSrc, setImgSrc] = useState(null);
  const webcamRef = React.useRef<any>();
  const capture = React.useCallback(() => {
  const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

 if (imgSrc !== null){ var myHeaders = new Headers();
myHeaders.append("key", `637766840968febde7076eeb${Math.random()}`);

var formdata = new FormData();
formdata.append("file", imgSrc);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata
};

fetch("http://localhost:5000/ffr/recognise", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));}
  // const handleInputChange = (e: any) => {
  //   const { id, value } = e.target;

  //   if (id === "email") {
  //     setEmail(value);
  //   }
  //   if (id === "password") {
  //     setPassword(value);
  //   }
  // };

  //   const handleSubmit = () =>{
  //     let obj = {
  //             firstName : firstName,
  //             lastName:lastName,
  //             email:email,
  //             password:password,
  //             confirmPassword:confirmPassword,
  //         }
  //     const newPostKey = push(child(ref(database), 'posts')).key;
  //     const updates = {};
  //     updates['/' + newPostKey] = obj
  //     return update(ref(database), updates);
  // }

  const handleSubmit = () => {
    console.log(username);
  };

  return (
    <div className="loginForm">
      <div className="form-body">
      <text className="title">
          Make a photo to log in, or go to register if you are here first time 
        </text>
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
      
      </div>
      <div className="footer formMargin">
        <button
          onClick={() => handleSubmit()}
          type="submit"
          className="btn BTNmargin"
        >
          Login
        </button>
        <button>
          <Link to="/register">Register</Link>
        </button>
       
      </div>
    </div>
  );
}

export default RegistrationForm;
