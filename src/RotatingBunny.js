import { useCallback, useState } from "react";
import { usePixiTicker } from "react-pixi-fiber/index.js";
import Bunny from "./Bunny";

let circleSpeed = 4
// http://pixijs.io/examples/#/basics/basic.js
function RotatingBunny(props) {

  const [position, setPosition] = useState(800);
  const animate = useCallback((delta) => {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent tranformation


    setPosition((x) => 
    x - circleSpeed * delta
    );
  }, []);
  usePixiTicker(animate);

  if(position < -150){setPosition((x) => 
    x = 800
  );}

  return <Bunny {...props} x={position} />;
}

export default RotatingBunny;
