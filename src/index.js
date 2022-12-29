import { createRoot } from "react-dom/client";
import { Sprite, Stage, Texture } from "react-pixi-fiber/index.js";
import bunny from "./bunny.png";
import * as PIXI from "pixi.js"; 



function Bunny (props) {
  return <Sprite texture={PIXI.Texture.from(bunny)} {...props} />;
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <>
  <Stage options={{ backgroundColor: 0x10bb99, height: 600, width: 800 }}>
    <Bunny x={200} y={200} />
  </Stage>
  </>,
); 