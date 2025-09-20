import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import AwalKarir from './Pages/AwalKarir';
import Pencapaian from './Pages/Pencapaian';
import AkhirKarir from './Pages/AkhirKarir';

export default function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/awal-karir" element={<AwalKarir />} />
          <Route path="/pencapaian" element={<Pencapaian />} />
          <Route path="/akhir-karir" element={<AkhirKarir />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
