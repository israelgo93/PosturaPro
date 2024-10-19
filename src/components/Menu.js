import { useState } from "react";
import { MenuHeader } from "./MenuHeader";
import { CalibrateBtn } from "./CalibrateBtn";
import { PostureStatus } from "./PostureStatus";
import logo from "../utils/ergosmart.png";

export let btnSelected = false;
export function setBtn(value) {
  btnSelected = value;
}

export function Menu(props) {
  const [state, setState] = useState("Calibration");
  const [audioEnabled, setAudioEnabled] = useState(true);

  const calibratePose = () => {
    if (props.postureRef.current === -1) {
      console.log("Cannot calibrate. No pose is detected.");
    } else {
      btnSelected = true;
      setState("Tracking");
    }
  };


  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled);
  };

  return (
    <div className="menu bg-deep-space bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-2xl p-6 mb-8 shadow-neon">
      <img
        src={logo}
        className="w-24 h-24 mb-6 mx-auto animate-pulse-fast rounded-full"
        alt="logo"
      />
      <MenuHeader state={state} />
      <PostureStatus state={state} />
      <span className="mr-2">
        {" "}
        <CalibrateBtn state={state} onClickCallback={calibratePose} />
      </span>
      <button
        className="btn mt-4 bg-gradient-to-r from-neon-green to-neon-blue text-white font-bold py-2 px-4 rounded-full 
                     shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out 
                     transform hover:scale-105 uppercase tracking-wider text-sm"
        onClick={toggleAudio}
      >
        {audioEnabled ? "Disable Audio" : "Enable Audio"}
      </button>
    </div>
  );
}
