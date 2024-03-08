import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter] =  useState(0)

  const addValue = function(){
    if(counter <20){
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)    //still value increased by one because update happen in batches

      //setCounter contains a callback
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)

    }
  }

  const decrementValue = function(){
    
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>counter project{counter}</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addValue}>increment value</button>
      <br />
      <button onClick={decrementValue}>decrement value</button>
      <p>counter : {counter}</p>
    </>
  )
}

export default App
