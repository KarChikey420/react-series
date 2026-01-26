import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1 from './componnent/card1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card1/>
    </>
  )
}

export default App
