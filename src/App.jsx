import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Login from './components/login';
import Signup from './components/Signup';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
