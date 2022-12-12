import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaEyeSlash, FaEye } from "react-icons/fa";
import { WebcamCapture } from "./VideoPlayer";
function RegistrationForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;

    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

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
    console.log(email, password);
  };

  return (
    <div className="loginForm">
      <div className="form-body">
      <text className="title">
          Make a photo to log in, or go to register if you are here first time 
        </text>
<WebcamCapture />
      
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
