import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div>
      <Navbar/>

      

      <Routes>
        <Route path="/about" element={<About/>}/>      
        <Route path="/contact" element={<Contact/>}/>
    
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
