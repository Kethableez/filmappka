import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import Webcam from "react-webcam";
function RegistrationForm() {
  const [username, setUsername] = useState();
  const [per, setPer] = useState(true)
  const [per1, setPer1] = useState(true)
  const [domination, setDomination] = useState<string>();

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };
  const [imgSrc, setImgSrc] = useState(null);
  const [usernameToSend, setUsernameToSend] = useState()
  const [emotion, setEmotion] = useState()
  const webcamRef = React.useRef<any>();
  const capture = React.useCallback(() => {
  const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  async function dataUrlToFile(dataUrl: RequestInfo | URL, fileName: string) {
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    return new File([blob], fileName, { type: "image/png" });
  }

  async function sendToRecognise(imgSrc:any, username:string|undefined){
    let fileImg: any = null
  if (imgSrc ){
    const readyFile = await dataUrlToFile(imgSrc, "fileName");
    console.log(readyFile);
    fileImg = readyFile
    console.log(fileImg)
    };
  
 if(imgSrc && per ){
   var myHeaders = new Headers();
  myHeaders.append("key", `637766840968febde7076eeb`);


  var formdata = new FormData();
  formdata.append("file",fileImg );
  formdata.append("label",`${username}` );
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata
  };
  console.log("file",fileImg)
  
  fetch(`http://localhost:9000/ffr/recognise`, requestOptions)
    .then(response => response.json())
    .then(result => setUsernameToSend(result.results[0]) )
    .catch(error => console.log('error', error));}}



console.log("dlaBartka",usernameToSend)
    // sendToRecognise(imgSrc, "")
    if(usernameToSend){    var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json;odata.metadata=minimal;odata.streaming=true");
      
      var formdata = new FormData();
      formdata.append("name", usernameToSend);
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata
      };
      
      fetch("https://localhost:5001/api/Movie/createUser", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));}

        async function getEmotion(imgSrc:any, username:string|undefined){
          let fileImg: any = null
        if (imgSrc ){
          const readyFile = await dataUrlToFile(imgSrc, "fileName");
          console.log(readyFile);
          fileImg = readyFile
          console.log(fileImg)
          };
        
       if(imgSrc && per1 ){
         var myHeaders = new Headers();
        myHeaders.append("key", `637766840968febde7076eeb`);
      
      
        var formdata = new FormData();
        formdata.append("file",fileImg );
       
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata
        };
        console.log("file",fileImg)
        
const findDominationEmotion = Object.keys(emotion!).reduce((a, b) => emotion![a] > emotion![b] ? a : b)
setDomination(findDominationEmotion)

        fetch(`http://localhost:9000/ffr/emotion`, requestOptions)
          .then(response => response.json())
          .then(result => setEmotion(result) )
          .catch(error => console.log('error', error));}}
      
      
      
      console.log("emocje",emotion)
          getEmotion(imgSrc, "")

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
  var myHeaders = new Headers();
  myHeaders.append("key", "637766840968febde7076eeb");
  myHeaders.append("Content-Type", "text/plain");
  
  var raw = `${{emotion:[`${domination}`]}}`;
  
  var requestOptions1 = {
    method: 'POST',
    headers: myHeaders,
    body: raw
  };
  
  fetch("http://localhost:7000/ffr/recommendations", requestOptions1)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  const handleSubmit = useCallback( () => {
    sendToRecognise(imgSrc, "")
    // getEmotion(imgSrc, "")

  },[imgSrc]);

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
