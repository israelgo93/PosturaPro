export function MenuHeader(props) {
    if(props.state === "Calibración"){
      return(
        <div className="text-neon-blue">
          <h3 className="text-2xl font-bold mb-4">Bienvenido a PosturaPro AI</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Asegúrate de que tu cámara esté encendida y posicionada directamente frente a ti</li>
            <li>Siéntate erguido con una postura "correcta", cabeza y hombros en el marco</li>
            <li>Haz clic en el botón "Calibrar" de abajo</li>
            <li>Continúa usando tu computadora normalmente. ¡Te notificaremos si te encorvas!</li>
          </ol>
        </div>
      );
    } else if(props.state === "Seguimiento"){
      return(
        <div className="text-neon-green">
          <h3 className="text-2xl font-bold mb-4">Monitoreando Tu Postura</h3>
          <p>Para recalibrar, siéntate erguido y haz clic en "Calibrar" nuevamente.</p>
        </div>
      );
    }
}
