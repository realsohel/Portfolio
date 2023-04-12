import React from 'react'
// import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotesIcon from '@mui/icons-material/Notes';
import { Link } from 'react-router-dom';

import "./Navbar.css"

const Navbar = () => {

    // function home(){
    //     document.getElementById("home").style.display = "block";
    // }

    // function homeout(){
    //     document.getElementById("home").style.display = "none";
    // }
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
        <nav>
            <ul className='mt-52 float-right   mr-6 fixed right-0  hidden lg:block '>
                <li  onMouseOver={()=>{document.getElementById("home").style.display = "block";}} onMouseOut={()=>{document.getElementById("home").style.display = "none";}}>
                    <Link to="/" className="displaybtn bg-[#05F2F2] hover:bg-gray-300 float-right my-3  p-2  rounded-full  flex"> <span className='h2class mt-1 font-medium  mx-4 ' id='home' >HOME</span><HomeIcon className='hovering' sx={{ fontSize: 30 }} /> </Link>
                </li>

                <li onMouseOver={()=>{document.getElementById("about").style.display = "block";}} onMouseOut={()=>{document.getElementById("about").style.display = "none";}}>
                    <Link to="/about" className=" btn bg-[#05F2F2] hover:bg-gray-300 float-right my-3  p-2 rounded-full flex"><span className='h2class mt-1 font-medium  mx-4 ' id='about' >ABOUT</span><AccountCircleIcon sx={{ fontSize: 30 }} /> </Link>
                </li>

                <li onMouseOver={()=>{document.getElementById("portfolio").style.display = "block";}} onMouseOut={()=>{document.getElementById("portfolio").style.display = "none";}}>
                    <Link to="/portfolio" className="btn bg-[#05F2F2] hover:bg-gray-300 float-right my-3  p-2 rounded-full flex"> <span className='h2class mt-1 font-medium  mx-4 ' id='portfolio' >PORTFOLIO</span> <NotesIcon sx={{ fontSize: 30 }}/></Link>
                </li>

                <li onMouseOver={()=>{document.getElementById("contact").style.display = "block";}} onMouseOut={()=>{document.getElementById("contact").style.display = "none";}}>
                    <Link to="/contact" className="btn bg-[#05F2F2] hover:bg-gray-300 float-right my-3  p-2 rounded-full flex"> <span className='h2class mt-1 font-medium  mx-4 ' id='contact' >CONTACT</span><MailIcon sx={{ fontSize: 30 }} /> </Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar
