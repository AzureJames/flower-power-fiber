import logo from './logo.svg';
import './App.css';
import { createRoot } from "react-dom/client";
import { Stage } from "react-pixi-fiber";
import RotatingBunny from "./RotatingBunny";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;






const height = 450;
const width = 600;
const OPTIONS = {
  backgroundColor: 0x1099bb,
  height: height,
  width: width
};

function App() {
  return (
    <Stage options={OPTIONS}>
      <RotatingBunny x={width / 2} y={height / 2} />
    </Stage>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
