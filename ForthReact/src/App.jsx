import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
  const[length,setLength]=useState(8)
  const[numberAllowed,setnumberAllowed]=useState(false)
  const[charAllowed,setcharAllowed]=useState(false)
  const[password,setPassword]=useState("")
  
  const genaratePassword=useCallback(()=>{
    let pass='';
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_+~`|}{[]:;?><,./-=";
    for(let i=1;i<=Array.length;i++){
      let char=Math.floor(Math.random()*str.length+1);
      pass=str.charAt(char);
    }
  setPassword(pass);

  },[length,numberAllowed,charAllowed,setPassword])

  return (
    <>
     <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
