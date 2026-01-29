import { Fragment } from 'react'
import { useState } from 'react'
import './App.css'

function Header({title}){
  return(
    <div>
      <h1>{title}</h1>
    </div>
  )
}

function App() {
  return(
    <div>
    <HeaderWithButton/>
    <Header title='kartikey'></Header>
    <Header title='kartikey'></Header>
    <Header title='kartikey'></Header>
    </div>
  )
}

function HeaderWithButton(){
   const[title,SetTitle]=useState("my name is kartikey");
   function UpdateTitle(){
      SetTitle("Hey! my name is"+ " "+Math.random())
}

  return <div>
    <button onClick={UpdateTitle}>Update the title</button>
    <Header title={title}></Header>
  </div>
}

export default App
