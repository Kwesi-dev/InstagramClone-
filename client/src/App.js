import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { useState } from 'react'
function App() {
  const [active, setActive] = useState(false)
  const [postActive, setPostActive] = useState(false)

  return (
    <div className="App">
      {/* <Navbar active={active} setActive={setActive} postActive={postActive} setPostActive={setPostActive}/>
      <Home setActive={setActive}/> */}
      <Login/>
      {/* <Register/> */}
    </div>
  );
}

export default App;
