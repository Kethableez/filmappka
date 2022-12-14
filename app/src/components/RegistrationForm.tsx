import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";
import { WebcamCapture } from "./VideoPlayer";
import thwack from "thwack";

function RegistrationForm() {
  const [username, setUserName] = useState();
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



  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    if (id === "username") {
      setUserName(value);
    }
   
  };

  const useBlobUrl = (imageUrl: any) => {
    const [blobUrl, setBlobUrl] = useState("");
  
    useEffect(() => {
      // get the blob URL for this image URL (or null)
      let url = sessionStorage.getItem(imageUrl);
  
      async function fetchData() {
        if (!url) {
          // skip load if we have a URL previously stored in sessionStorage
          const { data } = await thwack.get(imageUrl, { responseType: "blob" });
          url = URL.createObjectURL(data); // create a "blob URL" (lasts per session)
          sessionStorage.setItem(imageUrl, url); // save in session storage
        }
        setBlobUrl(url); // set in state
      }
  
      fetchData();
    }, [imageUrl]); // only execure if imageUrl changes
  
    return blobUrl;
  };
 const dupa = useBlobUrl(imgSrc)
  console.log(dupa)
 if(imgSrc && username){ var myHeaders = new Headers();
  myHeaders.append("key", `637766840968febde7076eeb`);

const test = {data:[imgSrc]}
  var formdata = new FormData();
  formdata.append("file",test.data[0], dupa );
  formdata.append("label",username );
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata
  };
  
  fetch("http://localhost:5000/ffr/encode", requestOptions)
    .then(response => response.text)
    .then(result => console.log(result))
    .catch(error => console.log('error', error));}
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
    console.log(username,imgSrc);
  };

  return (
    <div className="form">
      
      
        <text className="title">
          Make a photo to register
        </text>
        <div className="photosM phoM"> 
    <Webcam
    
        audio={false}
        height={900}
        ref={webcamRef}
        screenshotFormat="image/webp"
        width={900}
        videoConstraints={videoConstraints}
      />
      {imgSrc && <img  src={dupa} />}
      </div>
     
      <div className="row padding">
        <button onClick={capture}>Capture photo</button>
       
        
      </div>
        
      
        
          <label className="form__label" htmlFor="firstName">
            Username
          </label>
          <input
            className="form__input"
            type="text"
            value={username}
            onChange={(e) => handleInputChange(e)}
            id="username"
            placeholder="Username"
          />
        
       
        <button
          onClick={() => handleSubmit()}
          type="submit"
          className="btn BTNmargin"
        >
          Register
        </button>
        <button>
          <Link to="/">Back</Link>
        </button>
     
    </div>
  );
}

export default RegistrationForm;
