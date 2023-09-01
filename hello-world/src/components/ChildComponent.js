import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <input type="text" placeholder="Child Name" id="a" />
      <button
        onClick={() => props.greetHandler(document.getElementById("a").value)}
      >
        Greet Parent
      </button>
    </div>
  );
}

export default ChildComponent;
