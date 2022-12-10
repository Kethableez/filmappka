import React from "react";
import { WebcamCapture } from "./VideoPlayer";

interface MoodScreenProps {}

const MoodScreen: React.FC<MoodScreenProps> = ({}) => {
  return (
    <>
      <div className="camera">
        <text className="title">
          Welcome, take a picture so we can show you the movies according to
          you`r mood:
        </text>

        <WebcamCapture />
      </div>
    </>
  );
};
export default MoodScreen;
