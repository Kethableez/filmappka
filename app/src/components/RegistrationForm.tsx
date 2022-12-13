import React, { useState } from "react";
import { Link } from "react-router-dom";
import { WebcamCapture } from "./VideoPlayer";

function RegistrationForm() {
  const [username, setUserName] = useState();
  



  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    if (id === "username") {
      setUserName(value);
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
    console.log(username);
  };

  return (
    <div className="form">
      
      
        <text className="title">
          Make a photo to register
        </text>
<WebcamCapture />
        
      
        
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
