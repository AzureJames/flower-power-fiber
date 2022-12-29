
import { Sprite, Stage, Texture, Text } from "react-pixi-fiber/index.js";



import * as React from "react";

import RotatingBunny from "./RotatingBunny";



function App() {
  return (
    <>
      <Text x={100} y={100} text="Hello world!" />
      <RotatingBunny />
      {/* position="50,50"  */}
    </>
  );
}

export default App;
