import { useCallback, useState } from "react";
import { usePixiTicker } from "react-pixi-fiber/index.js";
import Note from "./Note";

let circleSpeed = 4
// http://pixijs.io/examples/#/basics/basic.js
function NoteAnimated(props) {

  //start at right
  const [position, setPosition] = useState(800);
  const animate = useCallback((delta) => {
    // move note per time


    setPosition((x) => 
    x - circleSpeed * delta
    );
  }, []);
  usePixiTicker(animate);

  //reset note
  if(position < -150){setPosition((x) => 
    x = 800
  );}

  return <Note {...props} x={position} />;
}

export default NoteAnimated;
