import { useCallback, useState } from "react";
import {  Text } from "react-pixi-fiber/index.js";
import { usePixiTicker } from "react-pixi-fiber/index.js";
import Note from "./Note";

let circleSpeed = 4
// http://pixijs.io/examples/#/basics/basic.js
function NoteAnimated(props, pts) {
  
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

  //sweet spot zone
  if(position < 140 && position > 30){
    console.log("hit");
    console.dir(pts.valueOf);
  ;}

//TODO: LEARN/ ASK MY FRIENDS ETC HOW TO PASS THE POINTS VALUE OR CREATE IT... SHOULD
//PROBABLY BE AT THE APP LEVEL SO OTHER STUFF CAN ACCESS IT?

  return (
  <>
    <Note {...props} x={position} />
    <Text x={600} y={10} text={pts} />
  </>
  );
}

export default NoteAnimated;
