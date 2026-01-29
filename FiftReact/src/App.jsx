import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function 

  return (
    <>
      <buttoon onclick={ClickButton}>Click me!</buttoon>
      <Header title="Welcome To My Arena"/>
      <Header title="Whats Going On"/>
    </>
  )
}
  function Header({title}){
     return <div>
      <h1>{title}</h1>
     </div>
  }


export default App
