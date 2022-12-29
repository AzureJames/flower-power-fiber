import { Sprite, Stage, Texture, Text } from "react-pixi-fiber/index.js";
import drum from "./drum.png";
import * as PIXI from "pixi.js"; 

export default function Drum (props) {
    return <Sprite texture={PIXI.Texture.from(drum)} {...props} />;
  }