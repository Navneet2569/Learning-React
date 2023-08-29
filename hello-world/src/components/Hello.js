import React from "react";

const Hello = () => {
  // return <h1>Hello Navneet Singh</h1>;
  return React.createElement(
    "div",
    { id: "hello", className: "dummy" },
    React.createElement("h1", null, "Hello Navneet Singh")
  );
};

export default Hello;
