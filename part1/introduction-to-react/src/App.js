import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}


const Content = (props) => {
  return (
    <div>
      <Part part1={props.part[0]} exercises1={props.exercises[0]} />
      <Part part2={props.part[1]} exercises2={props.exercises[1]} />
      <Part part3={props.part[2]} exercises3={props.exercises[2]} />
    </div>
  )
}


const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>
    </div>
  )
}


const Part = (props) => {

  return (
    <div>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
    </div>
  )
}





const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const part = [part1, part2, part3]
  const exercises = [exercises1, exercises2, exercises3]
  return(
    <div>
      <Header course={course}/>
      <Content part={part} exercises={exercises}/>
      <Total exercises={exercises}/>
    </div>
  )
}

export default App;
