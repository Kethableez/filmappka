import React from "react";
import { WebcamCapture } from "./VideoPlayer";

interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = ({}) => {
  return (
    <>
      <image></image>
      <div className="camera">
        <text className="title">Welcome, make photo to unlock a resources</text>

        <WebcamCapture />
      </div>
    </>
  );
};
export default LoginScreen;
