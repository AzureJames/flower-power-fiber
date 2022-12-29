import { useCallback, useState } from "react";
import { usePixiTicker } from "react-pixi-fiber/index.js";
import Bunny from "./Bunny";

let circleSpeed = 2
// http://pixijs.io/examples/#/basics/basic.js
function RotatingBunny(props) {

  const [rotation, setRotation] = useState(800);
  const animate = useCallback((delta) => {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent tranformation
    
    setRotation((x) => 
    x - circleSpeed * delta);
  }, []);
  usePixiTicker(animate);

  return <Bunny {...props} x={rotation} />;
}

export default RotatingBunny;
