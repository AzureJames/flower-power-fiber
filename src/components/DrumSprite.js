import { Sprite, Stage, Texture, Text } from "react-pixi-fiber/index.js";
import drum from "../img/drum.png";
import drumhit from "../img/drumhit.png";
import * as PIXI from "pixi.js"; 
import { useCallback, useState } from "react";
import { usePixiTicker } from "react-pixi-fiber/index.js";

export default function DrumSprite (props) {
  const [tex, setTex] = useState(drum);
  

  //this is broke. eventually i want a mouse interaction event timeout
  const Clicked = () => {
    
        setTex(drumhit); 
        setTimeout(() => setTex(drum), 50);
    }
  


    return (
      <Sprite texture={PIXI.Texture.from(tex)} interactive={true} pointerdown={
        (event) => { Clicked() }
      } {...props} />
    )
  }