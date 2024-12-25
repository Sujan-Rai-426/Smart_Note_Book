import { useState } from 'react'

import './App.css'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Footer from './pages/Footer'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'


// Logout function
function Logout() {
  localStorage.clear();
  return <Navigate  to= '/login' />;
}


// Register function --> when shome one is registering I need to cleare local storage so we don't end up submitting the form with the previous user's data otherwise we will get the error
function RegisterAndLogout() {
  localStorage.clear();  //we don't want old access token to be in the local storage if exists
  return <Register />;
}


// App function
function App() {

  const [mode, setMode] = useState({
      backgroundColor: '#171b46',
      color: 'white'    
  })

  const toggleMode = () => {
      if (mode.backgroundColor === '#171b46') {
          setMode({
              backgroundColor: 'whitesmoke',
              color: 'black'
          })
      } else {
          setMode({
              backgroundColor: '#171b46',
              color: 'white'
          })
      }
  }


  return (
    <Router>

      <div style={mode}>
      
        <Navbar mode={mode} toggleMode={toggleMode} />

        <div className={`container`} style={{minHeight: '79.5vh', padding: '4vh 0'}}>
            <Routes>
              <Route exact path="/" element={ <ProtectedRoute> <Home mode={mode} /> </ProtectedRoute> } />
              <Route exact path="/about" element={ <>  <About /> </>} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/logout" element={<Logout />} />
              <Route exact path="/register" element={<RegisterAndLogout />} />
              <Route exact path="*" element={<NotFound />} />
            </Routes>
        </div>

        <Footer />

      </div>
    </Router>
  )
}

export default App
