import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import Webcam from "react-webcam";
function RegistrationForm() {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };
  const [domination, setDomination] = useState<string>();
  const [imgSrc, setImgSrc] = useState(null);
  const [usernameToSend, setUsernameToSend] = useState();
  const [emotion, setEmotion] = useState();
  const [per, setPer] = useState(true);

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

  async function sendToRecognise(imgSrc: any, username: string | undefined) {
    let fileImg: any = null;
    if (imgSrc) {
      const readyFile = await dataUrlToFile(imgSrc, "fileName");
      console.log(readyFile);
      fileImg = readyFile;
      console.log(fileImg);
    }

    if (imgSrc && !username) {
      var myHeaders = new Headers();
      myHeaders.append("key", `637766840968febde7076eeb`);

      var formdata = new FormData();
      formdata.append("file", fileImg);
      formdata.append("label", `${username}`);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
      };
      console.log("file", fileImg);

      fetch(
        `https://filmappkaffr.azurewebsites.net/ffr/recognise`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setUsernameToSend(result.results[0]))
        .catch((error) => console.log("error", error));
    }
  }

  console.log("dlaBartka", usernameToSend);
  // sendToRecognise(imgSrc, "")
  if (usernameToSend) {
    var requestOptions = {
      method: "POST",
    };

    fetch(
      `https://filmappka.azurewebsites.net/api/User/createUser?username=${usernameToSend}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  if (emotion && per) {
    const theGreatestEmotion =
      Object.keys(emotion)[
        Object.values(emotion).indexOf(
          Math.max(...(Object.values(emotion) as number[]))
        )
      ];
    setDomination(theGreatestEmotion);
    setPer(false);
  }
  console.log("dominujaca emocja", domination);

  if (usernameToSend && domination) {
    var requestOptions = {
      method: "PATCH",
    };

    fetch(
      `https://filmappka.azurewebsites.net/api/User/updateLastKnownEmotionForUser?userId=${usernameToSend}&emotion=${domination}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  async function getEmotion(imgSrc: any, username: string | undefined) {
    let fileImg: any = null;
    if (imgSrc) {
      const readyFile = await dataUrlToFile(imgSrc, "fileName");
      // console.log(readyFile);
      fileImg = readyFile;
      // console.log(fileImg)
    }

    if (imgSrc) {
      var myHeaders = new Headers();
      myHeaders.append("key", `637766840968febde7076eeb`);

      var formdata = new FormData();
      formdata.append("file", fileImg);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
      };
      // console.log("file",fileImg)

      fetch(
        `https://filmappkaffr.azurewebsites.net/ffr/emotion`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setEmotion(result))
        .catch((error) => console.log("error", error));
    }
  }

  console.log("emocje", emotion);
  //  !emotion && getEmotion(imgSrc, "")

  const handleSubmit = useCallback(() => {
    sendToRecognise(imgSrc, "");
    !emotion && getEmotion(imgSrc, "");
  }, [imgSrc]);

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
          {imgSrc && <img src={imgSrc} />}
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
          Log in
        </button>
        <button>
          <Link to="/register">Register</Link>
        </button>
        <button>
          <Link to="/films">movies</Link>
        </button>
      </div>
    </div>
  );
}

export default RegistrationForm;
