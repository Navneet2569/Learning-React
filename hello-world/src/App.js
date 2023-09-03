import react from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import "./App.css";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";

function App() {
  return (
    <div className="App">
      <Counter />

      {/* <Greet name="Diana" heroName="Wonder Woman">
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
      <Hello /> */}

      {/* <Message /> */}

      {/* <Greet name="Steve Rogers" heroName="Captain America" />
      <Welcome name="Steve Rogers" heroName="Captain America" />
      <Counter /> */}

      {/* <FunctionClick />

      <ClassClick /> */}

      {/* <EventBind /> */}

      <ParentComponent />
      <UserGreeting />

      <NameList />
    </div>
  );
}

export default App;
