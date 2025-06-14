import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo.jsx'
import Actor from './actor.jsx'
import Singer from './Singer.jsx'

function App() {
  const actors = ['Sakib', 'Raj', 'Jasim', 'Rubel'];
  const singers = [
    {name: 'Dr Mahfuzur Rahman', age: 68},
    {name: 'Eva Rahman', age: 38},
    {name: 'Shuvra Dev', age: 58},
    {name: 'Pritom Hasan', age: 28},
  ]
  return (
    <>
      <h1>Vite + React</h1>


      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      
      {/* <Actor name="Bappa Raz"></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      } */}
      
      {/* <Todo 
      task="learn React" 
      isDone={true}></Todo>
      <Todo task="Explore core concepts" isDone={false}></Todo> */}
      {/* <Device name = "Laptop" price='55k'></Device>
      <Device name = "Mobile" price='17k'></Device>
      <Person></Person>
      <Student name="Tasnim" grade='7' score='99'></Student>
      <Student name="Tanim" grade='7' score='89'></Student>
      <Student name="Tasnima" grade='7' score='100'></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props) {
  console.log(props.name);
  return <h2>This device: {props.name} price is {props.price}</h2>
}

function Person() {
  const age = 25, money = 25;
  const person = {name: 'Tasnim', age: '24', department: 'CSE'};
  return <h3>I am {person.name}! my age is{person.age}, my department is {person.department}</h3>
}

// const {name, grade, score} = {name: 'Tasnim',grade: '7', score: '99'}

function Student({name = 'Unknown', grade = 1, score = 0}) {
  console.log(name, grade, score);
  
  return(
    <div className='student'>
      <h3>This is a student</h3>
      <p>Name: {name}</p>
      <p>Grade: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    paddin: '20px',
    border: '2px solid purple',
    borderRadius: '10px'
  }
  return(
    <div style={{
    margin: '20px',
    paddin: '20px',
    border: '2px solid purple',
    borderRadius: '10px'
  }}>
      <h5>Develpoer</h5>
      <p>Coding: ..</p>
    </div>
  )
}

export default App
