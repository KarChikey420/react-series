import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Header title="Welcome To My Arena"/>
      <Header title="Whats Going On"/>
    </div> 
    </>
  )
}
  function Header({title}){
     return <div>
      <h1>{title}</h1>
     </div>
  }


export default App
