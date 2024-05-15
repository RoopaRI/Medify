import { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppTop from "./AppTop/AppTop";
import HomePage from "./HomePage/HomePage";

function App() {
  return (
    <div>
      <AppTop />
      <BrowserRouter>
              <Routes>
                <Route path='/' exact element={<HomePage />} />
                <Route path='/home' exact element={<HomePage />} />
              </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
