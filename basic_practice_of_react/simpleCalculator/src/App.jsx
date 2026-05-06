import { useState } from 'react'

export default function App(){
  const [num1, setNum1]=useState(0)
  const [num2, setNum2]=useState(0)
  const [result, setResult]=useState(0)

  const handleAddition=()=>{
     setResult(Number(num1)+Number(num2))
  }
  const handleSubtraction=()=>{
    setResult(Number(num1)-Number(num2))
  }
  const handleMultiplication=()=>{
    setResult(Number(num1)*Number(num2))
  }
  const handleDivision=()=>{
    if(num2!==0){
      setResult(Number(num1)/Number(num2))
    }else{
      setResult("Cannot divide by zero")
    }
  }

  return(
    <div>
        <h1>Simple Calculator</h1>
        <input type='number' value={num1} onChange={(e)=>setNum1(e.target.value)} placeholder='Number 1' />
        <input type='number' value={num2} onChange={(e)=>setNum2(e.target.value)} placeholder='Number 2' />
        <div>
          <button onClick={handleAddition}>+</button>
          <button onClick={handleSubtraction}>-</button>
          <button onClick={handleMultiplication}>*</button>
          <button onClick={handleDivision}>/</button>
        </div>
        <div>
          <h2>Result: {result}</h2>     
        </div>

    </div>
  )
}