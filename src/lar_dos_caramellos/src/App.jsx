import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import CardRegisterPage from './pages/CardRegisterPage';
import Navbar from './components/NavbarComponent.jsx';
import HomePage from './pages/HomePage.jsx';

function App() {


  return (
    <>
{/* Global styles should be placed in App.css or index.css instead of inline <style> in JSX */}


      <BrowserRouter>
      <Navbar/> 


         
      


      <Routes>
        <Route path='/' element={<HomePage/>} />

        <Route path='/login' element={<Login/>} />

        <Route path ='/register' element= {<RegisterPage/>} />

      <Route path ='/regCard' element= {<CardRegisterPage/>} />

      </Routes>

      
      </BrowserRouter>



    </>
  )
}

export default App
