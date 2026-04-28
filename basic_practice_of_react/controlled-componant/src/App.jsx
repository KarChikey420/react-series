import { useState } from 'react'

export default function App(){
  const [name, setName]=useState(" ")

  const handleChange =(e)=>{
    const value = e.target.value;

    if (value.length <=50){
      setName(value);
    }

  } 
   return(
    <div>
      <input type='text' value={name} onChange={handleChange} placeholder='Type something'/>
      <p>{name.length}/50</p> 

      <p>Previous value: {name}</p>
    </div>
   )
}