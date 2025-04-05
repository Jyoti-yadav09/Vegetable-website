import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';

const App = () => {
  return (
    <div>
      <Navbar/>

      

      <Routes>
        <Route path="/about" element={<About/>}/>      

    
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
