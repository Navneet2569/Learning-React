import "./App.css";
import React from "react";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounter2 from "./components/HookCounter2";
import HookCounter3 from "./components/HookCounter3";
import HookCounter1 from "./components/HookCounter1";
import HookMouse from "./components/HookMouse";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
import C from "./components/C";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounter2 /> */}
      {/* <HookCounter3 /> */}
      {/* <HookCounter1 /> */}
      {/* <HookMouse /> */}
      <IntervalHookCounter />
      <DataFetching />

      <UserContext.Provider value={"Navneet"}>
        <ChannelContext.Provider value={"NavCoders"}>
          <C />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
