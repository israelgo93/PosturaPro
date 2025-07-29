import { useState } from "react";
import { MenuHeader } from "./MenuHeader";
import { CalibrateBtn } from "./CalibrateBtn";
import { PostureStatus } from "./PostureStatus";
import { Logo } from "./Logo";

export let btnSelected = false;
export function setBtn(value) {
  btnSelected = value;
}

export function Menu(props) {
  const [state, setState] = useState("Calibración");
  const [audioEnabled, setAudioEnabled] = useState(true);

  const calibratePose = () => {
    if (props.postureRef.current === -1) {
      console.log("No se puede calibrar. No se detecta postura.");
    } else {
      btnSelected = true;
      setState("Seguimiento");
    }
  };

  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled);
  };

  return (
    <div className="menu bg-deep-space bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-3xl p-6 sm:p-8 mb-4 sm:mb-8 w-full max-w-md mx-auto border border-neon-blue border-opacity-30">
      <div className="flex items-center justify-center mb-6">
        <Logo />
      </div>
      <MenuHeader state={state} />
      <PostureStatus state={state} />
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
        <CalibrateBtn state={state} onClickCallback={calibratePose} />
        <button
          className="btn w-full sm:w-auto bg-space-gray text-neon-blue hover:bg-neon-blue hover:text-deep-space transition-colors duration-300"
          onClick={toggleAudio}
        >
          {audioEnabled ? "Desactivar Audio" : "Activar Audio"}
        </button>
      </div>
    </div>
  );
}
