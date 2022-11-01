import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Portofolio from './pages/Portofolio';
import Kontak from './pages/Kontak';
import 'bootstrap'
import { HelmetProvider } from 'react-helmet-async';
import Profil from './pages/Profil';
import Login from './pages/Login';
import PenggunaanContext from './pages/PenggunaanContext';
import Mahasiswa from './pages/Mahasiswa';

const App = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portofolio' element={<Portofolio />} />
          <Route path='/Kontak' element={<Kontak />} />
          <Route path='/Profil' element={<Profil />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/penggunaan_context' element={<PenggunaanContext />} />
          <Route path='/mahasiswa' element={<Mahasiswa />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}
export default App
