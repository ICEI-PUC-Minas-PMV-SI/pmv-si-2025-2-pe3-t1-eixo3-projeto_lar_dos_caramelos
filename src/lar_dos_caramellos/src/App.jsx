import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import CardRegisterPage from './pages/CardRegisterPage';
import NavbarComponent from './components/NavbarComponent';
import HomePage from './pages/HomePage';
import EventosPage from './pages/Eventos';
import DicasPetsPage from './pages/DicasPetsPage';
import Apadrinhe from './pages/Apadrinhe';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/register-card' element={<CardRegisterPage />} />
          <Route path='/eventos' element={<EventosPage />} />
          <Route path='/dicas' element={<DicasPetsPage />} />
          <Route path='/apadrinhar' element={<Apadrinhe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
