import "./App.css";
import React, { useReducer } from "react";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounter2 from "./components/HookCounter2";
import HookCounter3 from "./components/HookCounter3";
import HookCounter1 from "./components/HookCounter1";
import HookMouse from "./components/HookMouse";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
import C from "./components/C";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import Counter3 from "./components/Counter3";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
      break;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  // const array = [1, 2, 3, 4];
  // const reducer = (acc, crr) => acc + crr;
  // const ans = array.reduce(reducer, 5);

  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounter2 /> */}
      {/* <HookCounter3 /> */}
      {/* <HookCounter1 /> */}
      {/* <HookMouse /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}

      {/* <UserContext.Provider value={"Navneet"}>
        <ChannelContext.Provider value={"NavCoders"}>
          <C />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <h1>{ans}</h1> */}

      {/* <Counter1 /> */}
      {/* <Counter2 /> */}
      <Counter3 />
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <div>
          <h1>Count-{count}</h1>

          <ComponentA />
          <ComponentB />
          <ComponentC />
        </div>
      </CountContext.Provider>
    </div>
  );
}

export default App;
