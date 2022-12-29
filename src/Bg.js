import { Sprite, Stage, Texture, Text } from "react-pixi-fiber/index.js";
import bg from "./bg.png";
import * as PIXI from "pixi.js"; 

export default function Bg (props) {
    return <Sprite texture={PIXI.Texture.from(bg)} {...props} />;
  }