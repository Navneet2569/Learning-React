import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "John",
      age: 30,
      skill: "JavaScript",
    },
    {
      id: 2,
      name: "Alice",
      age: 25,
      skill: "Python",
    },
    {
      id: 3,
      name: "Bob",
      age: 35,
      skill: "Java",
    },
  ];
  const personList = persons.map((person) => <Person person={person} />);
  return <div>{personList}</div>;
}

export default NameList;
