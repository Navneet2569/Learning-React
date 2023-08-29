import react from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import "./App.css";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Greet name="Diana" heroName="Wonder Woman">
        This is children props
      </Greet>
      <Greet name="Bruce" heroName="Batman">
        {" "}
        <button>Action</button>{" "}
      </Greet>
      <Greet name="Clark" heroName="Superman" />
      <Welcome name="Bruce" heroName="Batman">
        This is something extra
      </Welcome>
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Bruce" heroName="Batman" />
      {/* <Hello /> */}
    </div>
  );
}

export default App;
