import React, { useState } from "react";
import "./App.css";
import LoginScreen from "./components/LoginScreen";
import UserInfo from "./components/UserInfo";
import WelcomeScreen from "./components/WelconeInfo";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div>
      {!isLogged && (
        <div className="container">
          <div className="center">
            <text id="filmappka" className="center">
              FILMAPPKA
            </text>
          </div>
          <div className="midPart">
            <WelcomeScreen />
            <LoginScreen />
          </div>
          <div className="left">
            <text id="footer"> Projekt interfejsy człowiek-komputer</text>
          </div>
        </div>
      )}
      {isLogged && (
        <div className="userContainer">
          <UserInfo />
        </div>
      )}
    </div>
  );
}

export default App;
