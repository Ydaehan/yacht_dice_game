import Dice from "./components/Dice/Dice";
import "./App.css";

function App() {
  return (
    <div className="parent">
      <div className="child">
        <h1>Yacht Dice Game</h1>
        <Dice />
      </div>
    </div>
  );
}

export default App;
