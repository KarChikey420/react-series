import { Fragment } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const[title,SetTitle]=useState("my name is kartikey")

  function ClickButton(){
      SetTitle("Hey! my name is"+ " "+Math.random())
  }
   
  return(
    <Fragment>
     <button onClick={ClickButton}>Click Me</button>
     <Header title={title}/>
    </Fragment>
  )
}

function Header({title}){
  return(
    <div>
      <h1>{title}</h1>
    </div>
  )
}
export default App
