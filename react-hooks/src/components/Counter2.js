import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
      break;
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
      break;
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Counter2() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>First Counter - {count.firstCounter}</h1>
      <h1>Second Counter - {count.secondCounter}</h1>
      <br />
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement by 5
      </button>
      <br />
      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
        Increment Counter 2
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        Decrement Counter 2
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 5 })}>
        Increment Counter2 by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 5 })}>
        Decrement Counter2 by 5
      </button>
    </div>
  );
}

export default Counter2;
