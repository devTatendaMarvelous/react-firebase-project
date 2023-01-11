import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'
import { AppNavbar } from './components/AppNavbar'
import { Login } from './pages/Login'
import { Main } from './pages/main'
import { CreatePost } from './pages/createpost/CreatePost'
function App() {
 

  return (
    <div className="App">
      <Router>
        <AppNavbar/>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/createpost' element={<CreatePost/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
