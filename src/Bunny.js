import { Sprite, Stage, Texture, Text } from "react-pixi-fiber/index.js";
import bunny from "./bunny.png";
import * as PIXI from "pixi.js"; 

export default function Bunny (props) {
    return <Sprite texture={PIXI.Texture.from(bunny)} {...props} />;
  }