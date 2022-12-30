import { createRoot } from "react-dom/client";
import { Sprite, Stage, Texture } from "react-pixi-fiber/index";
import App from "./App.js";
// import bg from "./img/bg.png";




const container = document.getElementById("root");
const root = createRoot(container);

root.render(
<>
<Stage options={{  height: 600, width: 800 }}>
  <App />
</Stage>
</>); 