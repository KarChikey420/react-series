import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom'
import './App.css'
import { Dashboard } from './component/dashboard'
import { Landing } from './component/landing'

function Navigation() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>Landing Page</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
    </div>
  );
}

function App() {
  return(
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/" element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
