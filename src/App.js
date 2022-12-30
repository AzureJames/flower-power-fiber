
import { Sprite, Stage, Texture, Text } from "react-pixi-fiber/index.js";
import * as React from "react";
import { useCallback, useState } from "react";
import Flower from "./components/Flower";
import NoteAnimated from "./components/NoteAnimated";
import Drum from "./components/DrumSprite";
import Bg from "./components/Bg";


function App() {
  const [pts, setPts] = useState(1);
  const [tutorial, setTutorial] = useState("Hit the drum when the notes are in position");
  setTimeout(() => setTutorial(""), 5000);

  return (
    <>
      <Bg height="600" width="800"></Bg>
      <Text x={170} y={10} text={tutorial} />
      <NoteAnimated y={70} pts={pts}/>
      <Flower position="100,350"></Flower>
      <Drum position="300, 350" height="200" width="200" ></Drum>
    </>
  );
}

export default App;
