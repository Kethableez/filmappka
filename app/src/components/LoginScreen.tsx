import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaEyeSlash, FaEye } from "react-icons/fa";
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
        <div className="email formMargin">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            value={email}
            onChange={(e) => handleInputChange(e)}
            placeholder="Email"
          />
        </div>
        <div className="password formMargin">
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <input
            className="form__input"
            type={passwordShown ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => handleInputChange(e)}
            placeholder="Password"
          />
          <button onClick={togglePassword}>
            {passwordShown ? <FaEyeSlash /> : <FaEye />}
          </button>
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
        <button>
          <Link to="/mood">Make a photo</Link>
        </button>
      </div>
    </div>
  );
}

export default RegistrationForm;
