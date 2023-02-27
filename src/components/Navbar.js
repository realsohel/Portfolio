import React from 'react'
// import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotesIcon from '@mui/icons-material/Notes';
import { Link } from 'react-router-dom';

import "./Navbar.css"

const Navbar = () => {
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
            <ul className='mt-52 float-right   mr-6 fixed right-0  hidden lg:block'>
                <li className="">
                    <Link to="/" className="displaybtn bg-[#05F2F2] hover:bg-gray-300 float-right my-3  p-2  rounded-full  flex"> <span className='h2class mt-1 font-medium  mx-4 ' >HOME</span><HomeIcon className='hovering' sx={{ fontSize: 30 }} /> </Link>
                </li>
                <li>
                    <Link to="/about" className=" btn bg-[#05F2F2] hover:bg-gray-300 float-right my-3  p-2 rounded-full flex"><h2 className='mt-1 font-medium hidden ' >HOME</h2> <AccountCircleIcon sx={{ fontSize: 30 }} /> </Link>
                </li>
                <li>
                    <Link to="/portfolio" className="btn bg-[#05F2F2] hover:bg-gray-300 float-right my-3  p-2 rounded-full "> <NotesIcon sx={{ fontSize: 30 }}/></Link>
                </li>
                <li>
                    <Link to="/contact" className="btn bg-[#05F2F2] hover:bg-gray-300 float-right my-3  p-2 rounded-full "> <MailIcon sx={{ fontSize: 30 }} /> </Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar
