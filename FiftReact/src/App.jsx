import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import { Dashboard } from './component/dashboard'
import { Landing } from './component/landing'

function App() {
  return(
    <div>
      <div>
        <button onClick={()=>{
          window.location.href="/";
        }}>Landing Page</button>

        <button onClick={()=>{
          window.location.href="/dashboard";
        }}>Dashboard</button>
      </div>
    <BrowserRouter>
        <Routes>
           <Route path="/dashboard" element={<Dashboard/>}/>
           <Route path="/" element={<Landing/>}/>
        </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App
