import {useState} from 'react';
import {MenuHeader} from './MenuHeader';
import {CalibrateBtn} from './CalibrateBtn';
import {PostureStatus} from './PostureStatus';
import logo from '../utils/ergosmart.png';

export let btnSelected = false;
export function setBtn(value){
  btnSelected = value;
}

export function Menu(props) {
    //two possibe states: Calibration, Tracking
    const [state, setState] = useState("Calibration");
  
    const calibratePose = () => {
      if(props.postureRef.current === -1){
        console.log("Cannot calibrate. No pose is detected.");
      } else {
        btnSelected = true;
        setState("Tracking");
      }
    }
  
    return (
      <div className="menu bg-deep-space bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-2xl p-6 mb-8 shadow-neon">
        <img src={logo} className="w-24 h-24 mb-6 mx-auto animate-pulse-fast rounded-full" alt="logo" />
        <MenuHeader state={state}/>
        <PostureStatus state={state}/>
        <CalibrateBtn state={state} onClickCallback={calibratePose}/>
      </div>
    )
}
