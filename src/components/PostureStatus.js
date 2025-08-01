export function PostureStatus(props) {
    if(props.state === "Calibración"){
      return null;
    } else if(props.state === "Seguimiento"){
      return(
        <h4 className="posture-status text-2xl font-bold mb-4 text-neon-blue animate-pulse">
          Postura: <span className="ml-2 text-neon-green"></span>
        </h4>
      )
    }
}
