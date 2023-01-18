import React from "react";

interface WelcomeScreenProps {}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({}) => {
  return (
    <>
      <div className="welcomeInfo">
        <text className="title">Welcome, make photo to unlock a resources</text>
        <text className="content">
          If you have an account please log in by photo.
          If you are new please go to the register form and fill it.
          Then please return back and log in
        </text>
      </div>
    </>
  );
};
export default WelcomeScreen;
