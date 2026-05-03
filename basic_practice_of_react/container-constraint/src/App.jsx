import { useState } from 'react'

export default function App(){
      const [count, setcount]=useState(0)

      const handleIncrement=()=>{
        if(count<10){
          setcount(count+1)
        }else{
          alert("Count cannot be greater than 10")
        }
      }

      const handleDecrement=()=>{
          if (count>0){
            setcount(count-1)
          }else{
            alert("Count cannot be less than 0")
          }
      }

      
}