import React from 'react'
// import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';

import "./Navbar.css"

const Navbar = () => {
    return (
        <>
        {/* For Mobile viewfi! */}
        <nav className="nav fixed bottom-0 w-[100%] h-[55px] shadow-[0_0_3px_rgba(0,0,0,0.2)] bg-gray-500 overflow-x-auto flex lg:hidden">
            <a href="/" className="nav-link  "> <HomeIcon fontSize="large" className='rounded-2xl border p-1 bg-gray-400 active:bg-[#05F2F2]'/> </a>
            <a href="/about" className="nav-link"> <AccountCircleIcon fontSize="large" className='rounded-2xl border p-1 bg-gray-400 active:bg-[#05F2F2]'/> </a>
            <a href="/me" className="nav-link"> <MailIcon fontSize="large" className='rounded-2xl border p-1 bg-gray-400 active:bg-[#05F2F2]'/> </a>
        </nav>

        
        {/* For Laptop viewfi! */}
        {/* <div className="container float-right  fixed z-auto mt-40 justify-end ">
        <nav className='float-right   justify-end  '>
        <ul >
                <li>
                    <a href="/"> <span>Home</span><HomeIcon sx={{ fontSize: 40 }}/> </a>
                </li>
        </ul>
        </nav>
        </div> */}
        </>
    )
}

export default Navbar
