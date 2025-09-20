import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import App from './App';
import './styles/style.css';
import 'aos/dist/aos.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop behavior="smooth" />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
