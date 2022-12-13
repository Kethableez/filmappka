import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import FilmSlider from "./components/FilmSlider";
import LoginScreen from "./components/LoginScreen";
import MoodScreen from "./components/MoodScreen";
import RegistrationForm from "./components/RegistrationForm";
import UserInfo from "./components/UserInfo";
import WelcomeScreen from "./components/WelconeInfo";

function App() {
  return (
    <Router>
      <div>
        <div className="container">
          <div className="center">
            <text id="filmappka" className="center">
              FILMAPPKA
            </text>
          </div>
          <div className="midPart">
            <Switch>
              <Route path="/userInfo">
                <UserInfo />
              </Route>
              <Route path="/register">
                <RegistrationForm />
              </Route>
              {/* <Route path="/mood">
                <WelcomeScreen />
                <MoodScreen />
              </Route> */}
              <Route path="/films">
                <div className="movies">
                  <FilmSlider />
                </div>
              </Route>
              <Route path="/">
                <WelcomeScreen />
                <LoginScreen />
              </Route>
            </Switch>
          </div>
          <div className="left">
            <text id="footer"> Projekt interfejsy człowiek-komputer</text>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
