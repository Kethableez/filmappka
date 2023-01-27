import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";

function RegistrationForm() {
  const [username, setUserName] = useState<string>();
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

  async function dataUrlToFile(dataUrl: RequestInfo | URL, fileName: string) {
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    return new File([blob], fileName, { type: "image/png" });
  }

  async function sendRegisterData(imgSrc: any, username: string | undefined) {
    let fileImg: any = null;
    if (imgSrc) {
      const readyFile = await dataUrlToFile(imgSrc, "fileName");
      console.log(readyFile);
      fileImg = readyFile;
      console.log(fileImg);
    }

    if (imgSrc && username) {
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

      fetch(`http://localhost:9000/ffr/encode`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }
  }

  const handleSubmit = useCallback(() => {
    console.log(username, imgSrc);
    sendRegisterData(imgSrc, username);
  }, [username, imgSrc]);

  return (
    <div className="form">
      <text className="title">Make a photo to register</text>
      <div className="photosM phoM">
        <Webcam
          audio={false}
          height={900}
          ref={webcamRef}
          screenshotFormat="image/webp"
          width={900}
          videoConstraints={videoConstraints}
        />
        {imgSrc && <img src={imgSrc} />}
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
