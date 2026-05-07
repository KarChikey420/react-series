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

 