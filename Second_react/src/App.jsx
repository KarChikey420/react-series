import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  
  const addValue=() => {
    console.log("Button clicked", Math.random());
    count=count+1
    setCount(count)
  }

  return (
    <>
    <h1>Add a Number</h1>
    <h2>Number is {count}</h2>
    <button onClick={addValue}>Add</button>
    </>
  )
}

export default App
