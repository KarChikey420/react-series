import { useState } from 'react'
import MyApp from './myapp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MyApp/>
      <h1>Hi Kartikey!</h1>
    </div>
  )
}

export default App
