import React from "react";
import "./App.css";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";

function App() {
  return (
    <div className="App">
      {/* <FragmentDemo /> */}

      {/* <Table /> */}

      {/* <ParentComp />  */}

      {/* <RefsDemo /> */}

      {/* <FocusInput /> */}

      <FRParentInput />
    </div>
  );
}

export default App;
