import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePos = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mouseover", logMousePos);
  });
  return (
    <div>
      Hooks X-{x} Y-{y}
    </div>
  );
}

export default HookMouse;
