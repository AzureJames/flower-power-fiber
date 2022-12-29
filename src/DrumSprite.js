import { Sprite, Stage, Texture, Text } from "react-pixi-fiber/index.js";
import drum from "./drum.png";
import drumhit from "./drumhit.png";
import * as PIXI from "pixi.js"; 
import { useCallback, useState } from "react";
import { usePixiTicker } from "react-pixi-fiber/index.js";

export default function DrumSprite (props) {
  const [tex, setTex] = useState(drum);
  

  //this is broke. eventually i want a mouse interaction event timeout
  const Clicked = () => {
    usePixiTicker(
      useCallback((delta) => {
        while(delta < .5){
        setTex(drumhit); alert("hey");}
        setTex(drum)
    }))
  }


    return (
      <Sprite texture={PIXI.Texture.from(tex)} interactive={true} pointerdown={
        (event) => { Clicked() }
      } {...props} />
    )
  }