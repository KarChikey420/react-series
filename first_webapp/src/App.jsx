import { useState } from 'react'
import MyApp from './myapp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MyApp/>
      <p>Hi Kartikey!</p>
    </div>
  )
}

export default App
