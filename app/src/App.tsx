import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import FilmSlider from "./components/FilmSlider";
import LoginScreen from "./components/LoginScreen";
import UserInfo from "./components/UserInfo";
import WelcomeScreen from "./components/WelconeInfo";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <Router>
      <div>
        {!isLogged && (
          <div className="container">
            <div className="center">
              <text id="filmappka" className="center">
                FILMAPPKA
              </text>
            </div>
            <div className="midPart">
              <Switch>
                <Route path="/userInfo">
                  <UserInfo open={isLogged} />
                </Route>
                <Route path="/movies">
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
        )}
        {/* {isLogged && (
          <div className="userContainer">
            <UserInfo open={isLogged} />
          </div>
        )} */}
      </div>
    </Router>
  );
}

export default App;
