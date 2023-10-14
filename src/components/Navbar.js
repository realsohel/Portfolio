import React from 'react'

import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotesIcon from '@mui/icons-material/Notes';
import { Link } from 'react-router-dom';

import "../assets/Navbar.css"

const Navbar = () => {

    function homeover(){
        document.getElementById("home").style.display = "block";
        document.getElementById("tranformabout").style.transform = "scaleX(-1)";
        document.getElementById("tranformportfolio").style.transform = "scaleX(-1)";
        document.getElementById("tranformcontact").style.transform = "scaleX(-1)";

    }

    function homeout(){
        document.getElementById("home").style.display = "none";
        document.getElementById("tranformabout").style.transform = "none";
        document.getElementById("tranformportfolio").style.transform = "none";
        document.getElementById("tranformcontact").style.transform = "none";
    }

    function aboutover(){
        document.getElementById("about").style.display = "block";
        document.getElementById("tranformhome").style.transform = "scaleX(-1)";
        document.getElementById("tranformportfolio").style.transform = "scaleX(-1)";
        document.getElementById("tranformcontact").style.transform = "scaleX(-1)";

    }

    function aboutout(){
        document.getElementById("about").style.display = "none";
        document.getElementById("tranformhome").style.transform = "none";
        document.getElementById("tranformportfolio").style.transform = "none";
        document.getElementById("tranformcontact").style.transform = "none";
    }

    function portfolioover(){
        document.getElementById("portfolio").style.display = "block";
        document.getElementById("tranformhome").style.transform = "scaleX(-1)";
        document.getElementById("tranformabout").style.transform = "scaleX(-1)";
        document.getElementById("tranformcontact").style.transform = "scaleX(-1)";

    }

    function portfolioout(){
        document.getElementById("portfolio").style.display = "none";
        document.getElementById("tranformhome").style.transform = "none";
        document.getElementById("tranformabout").style.transform = "none";
        document.getElementById("tranformcontact").style.transform = "none";
    }

    function contactover(){
        document.getElementById("contact").style.display = "block";
        document.getElementById("tranformhome").style.transform = "scaleX(-1)";
        document.getElementById("tranformabout").style.transform = "scaleX(-1)";
        document.getElementById("tranformportfolio").style.transform = "scaleX(-1)";

    }

    function contactout(){
        document.getElementById("contact").style.display = "none";
        document.getElementById("tranformhome").style.transform = "none";
        document.getElementById("tranformabout").style.transform = "none";
        document.getElementById("tranformportfolio").style.transform = "none";
    }
    
    return (
        <>
        {/* For Mobile viewfi! */}
        <nav className="nav fixed bottom-0 w-[100%] h-[55px] shadow-[0_0_3px_rgba(0,0,0,0.2)] bg-gray-500 overflow-x-auto flex lg:hidden z-10">
            <Link to="/" className="nav-link  "> <HomeIcon fontSize="large" className='rounded-2xl border p-1 bg-gray-400 active:bg-[#05F2F2]'/> </Link>
            <Link to="/about" className="nav-link"> <AccountCircleIcon fontSize="large" className='rounded-2xl border p-1 bg-gray-400 active:bg-[#05F2F2]'/> </Link>
            <Link to="/portfolio" className="nav-link"> <NotesIcon fontSize="large" className='rounded-2xl border p-1 bg-gray-400 active:bg-[#05F2F2]'/> </Link>
            <Link to="/contact" className="nav-link"> <MailIcon fontSize="large" className='rounded-2xl border p-1 bg-gray-400 active:bg-[#05F2F2]'/> </Link>
        </nav>

        {/* For Laptop viewfi! */}
        {/* hover:bg-gray-300  */}
        <nav>
            <ul className='mt-52 float-right   mr-6 fixed right-0  hidden lg:block '>
                <li  id='tranformhome' onMouseOver={homeover} onMouseOut={homeout}>
                    <Link to="/" className=" bg-[#05F2F2]   my-6  p-2 min-w-min  w-[10%] grow-0 right-0 items-end  rounded-full  flex"> <p className='slide-left mt-1 font-medium  mx-4 hidden' id='home' >HOME</p><HomeIcon className='hovering' sx={{ fontSize: 30 }} /> </Link>
                </li>

                <li  id='tranformabout'  onMouseOver={aboutover} onMouseOut={aboutout}>
                    <Link to="/about" className=" btn bg-[#05F2F2]  my-6  p-2 min-w-min  w-[10%] grow-0  right-0 items-end  rounded-full flex "><p className='slide-left mt-1 font-medium  mx-4 hidden' id='about' >ABOUT</p><AccountCircleIcon sx={{ fontSize: 30 }} /> </Link>
                </li>

                <li id='tranformportfolio' onMouseOver={portfolioover} onMouseOut={portfolioout}>
                    <Link to="/portfolio" className="btn bg-[#05F2F2]  my-6 p-2 min-w-min w-[10%] grow-0 right-0 items-end  rounded-full flex"> <p className='slide-left mt-1 font-medium  mx-4 hidden' id='portfolio' >PROJECTS</p> <NotesIcon sx={{ fontSize: 30 }}/></Link>
                </li>

                <li id='tranformcontact' onMouseOver={contactover} onMouseOut={contactout}>
                    <Link to="/contact" className="btn bg-[#05F2F2]   my-6  p-2 min-w-min w-[10%] grow-0 right-0 items-end  rounded-full flex"> <p className='slide-left mt-1 font-medium  mx-4 hidden' id='contact' >CONTACT</p><MailIcon sx={{ fontSize: 30 }} /> </Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar
