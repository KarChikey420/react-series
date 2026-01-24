import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  
  const addValue=() => {
    // console.log("Button clicked", Math.random());
    if (count<20){
        count=count+1
        setCount(count)
    }else{
      console.log('stop there !')
    }
  }

  const removeValue=()=>{
    if(count>0){
        count=count-1
        setCount(count)
    }else{
      console.log('stop there!')
    }
  }

  return (
    <>
    <div>
    <h1>Add a Number</h1>
    <h2>Number is {count}</h2>
    <button onClick={addValue}>Add</button>
    <button onClick={removeValue}>Remove</button>
    </div>
    </>
  )
}

export default App
