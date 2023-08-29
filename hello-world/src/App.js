import react from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import "./App.css";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
    </div>
  );
}

export default App;
