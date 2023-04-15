
import { useState } from 'react';
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
import Portfolio from './components/Portfolio';

function App() {
  
  
  // document.body.style.backgroundColor='#343a40';
  const [mode , setmode] = useState('light');
  // const [alert, setAlert] = useState({msg:""});

  // const showAlert = (message)=>{
  //     setAlert({
  //       msg: message,
  //     })
  //     setTimeout(() => {
  //         setAlert({msg:""});
  //     }, 3000);
  // }


  const togglemode = ()=>{
    if(mode ==='dark'){
      setmode('light');
      document.body.style.backgroundColor='#343a40';
      
    }
    else{
      setmode('dark');
      document.body.style.backgroundColor='black';
  
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
        <Route exact path='/portfolio' element={<Portfolio/>}/>
        <Route exact path='/contact' element={<Contact />}/>
      </Routes>

    
      
    </BrowserRouter>
    </>
  );
}

export default App;
