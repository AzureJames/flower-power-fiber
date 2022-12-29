
import { Sprite, Stage, Texture, Text } from "react-pixi-fiber/index.js";
import * as React from "react";
import Flower from "./Flower";
import NoteAnimated from "./NoteAnimated";
import Drum from "./Drum";
import Bg from "./Bg";


function App() {
  return (
    <>
      <Bg height="600" width="800"></Bg>
      <Text x={170} y={10} text="Hit the drum when the notes are in position" />
      <NoteAnimated y={70}/>
      <Flower position="100,350"></Flower>
      <Drum position="300, 350" height="200" width="200"></Drum>
    </>
  );
}

export default App;
