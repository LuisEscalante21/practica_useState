import {BrowserRouter as Router, Routes, Route} 
from 'react-router'

import Home from './pages/home'
import Calculadora from './pages/Calculadora/Calculadora'
import TodoList from './pages/Todo/Todo'
import Nav from './components/Nav'
import RegistroEstudiantes from './pages/RegisterEstudiantes'
import CardPage from './pages/Card'
import Contact from './pages/Contact'

function App() {

  return (
    <>
    <Router>
|    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<Contact />} />
        <Route path="/Card"element={<CardPage nombre="Luis Escalante" edad="18" codigo="20200602" />} /> 
        <Route path="/Calculadora" element={<Calculadora />} />
        <Route path="/Todo" element={<TodoList />}/>
        <Route path="/registroEstudiantes" element ={<RegistroEstudiantes />} /> 
      </Routes>
    </Router> 
    </>
  )
}

export default App