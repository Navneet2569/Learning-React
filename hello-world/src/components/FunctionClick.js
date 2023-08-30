import React from "react";

function FunctionClick() {
  function clickHandler() {
    const a = document.getElementById("b");
    a.textContent = "Clicked";
  }
  return (
    <div>
      <button id="b" onClick={clickHandler}>
        Click
      </button>
    </div>
  );
}

export default FunctionClick;
