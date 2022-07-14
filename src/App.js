import React from "react";
import {
  BrowserRouter,
  
  Routes,
  Route
} from 'react-router-dom';
import YaziDetayi from "./components/YaziDetayi";
import YaziEkle from "./components/YaziEkle";

import YaziListesi from "./components/YaziListesi";



function App() {
  return (
    <div>
  
  <BrowserRouter>
  <Routes>
          <Route path="/"  element={<YaziListesi/>} />
          <Route path="/yazi/:id"  element={<YaziDetayi/>} />
          <Route path="/yaziekle"  element={<YaziEkle/>} />
          </Routes></BrowserRouter>

    </div>
  );
}

export default App;