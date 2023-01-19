
import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import ModeBtn from './components/ModeBtn';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';

function App() {
  
  
  // document.body.style.backgroundColor='#343a40';
  const [mode , setmode] = useState('light');
  const togglemode = ()=>{
    if(mode ==='dark'){
      setmode('light');
      document.body.style.backgroundColor='white';
      
    }
    else{
      setmode('dark');
      document.body.style.backgroundColor='#343a40';
  
    }
  }
  return (
    <>
    <BrowserRouter>
      <ModeBtn mode={mode} togglemode={togglemode}/>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>

    
      
    </BrowserRouter>
    </>
  );
}

export default App;
