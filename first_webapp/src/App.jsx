import { useState } from 'react'
import MyApp from './myapp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MyApp/>
  )
}

export default App
