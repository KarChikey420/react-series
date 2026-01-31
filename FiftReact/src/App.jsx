import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import { Dashboard } from './component/dashboard'
import { Landing } from './component/landing'

function App() {
  return(
    <>
    <BrowserRouter>
        <Routes>
           <Route path="/dashboard" element={<Dashboard/>}/>
           <Route path="/" element={<Landing/>}/>
        </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
