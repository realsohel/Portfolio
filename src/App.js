
import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import ModeBtn from './components/ModeBtn';
import Navbar from './components/Navbar';

function App() {
  
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
      <ModeBtn mode={mode} togglemode={togglemode}/>
      <Home/>
      <Navbar/>
    </>
  );
}

export default App;
