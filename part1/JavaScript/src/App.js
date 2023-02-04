import React from "react";

const Header = (props) => {
  return (
    <div>
      <h2>{props.course}</h2>
    </div>
  );
};
const Contents = (props) => {
  return (
    <div>
      {props.part.map((item) => (
        <p>{item.name} {item.exercises}</p>
      ))}
    </div>
  );
};
const Total = (props) => {
  const data = []
  props.part.map((item) => {
    data.push(item.exercises);
    return;
  });

  const totalData = data.reduce((a, b) => a + b, 0)
  console.log(totalData)
  return (
    <div>
        <p>Number of excercise {totalData}</p>
      <p></p>
    </div>
  );
};

const App = () => {
  const name = "Half Stack application development";
  const part = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={name} />
      <Contents part={part} />
      <Total part={part} />
    </div>
  );
};

export default App;
