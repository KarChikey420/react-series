import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom'
import './App.css'
import { lazy, Suspense } from 'react'
const Landing =lazy(()=>import('./component/landing'))
const Dashboard=lazy(()=>import('./component/dashboard'))


function App() {
  return(
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/dashboard" element={<Suspense fallback ={"Loading......"}><Dashboard/></Suspense>}/>
        <Route path="/" element={<Suspense fallback={"Loading....."}><Landing/></Suspense>}/>
      </Routes>
    </BrowserRouter>
  )
}

function AppBar() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>Landing Page</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
    </div>
  );
}
export default App
