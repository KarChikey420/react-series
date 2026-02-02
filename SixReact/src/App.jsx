import { useState } from 'react'
import './App.css'
import { Togel } from './component/togel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Togel/>
    </>
  )
}

export default App
