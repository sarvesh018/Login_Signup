import { BrowserRouter, Router } from 'react-router-dom';
import './App.css'

import Login from './components/login';

function App() {
  return (
    <BrowserRouter>
      <Login/>
    </BrowserRouter>
  )
}

export default App
