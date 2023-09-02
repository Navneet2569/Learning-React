import React from "react";

function Person({ person }) {
  return (
    <h1>
      Hi My name is {person.name} and I am {person.age} years old. I am good in{" "}
      {person.skill}{" "}
    </h1>
  );
}

export default Person;
