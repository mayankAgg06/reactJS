import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0);

  const addValue= () => {
    if(counter<20) counter=counter+1;
    console.log("Clicked",counter);
    setCounter(counter);
  }
  const subValue= ()=>{
    if(counter>0)counter=counter-1; 
    console.log("Clicked Subtracted", counter);
    setCounter(counter);
  }
  return (
    <>
      <h1>Hello this is Mayank</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button> <br />
      <button onClick={subValue}>Remove Value {counter}</button>
    </>
  )
}

export default App;
