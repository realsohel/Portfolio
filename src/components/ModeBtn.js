import React from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';

const ModeBtn = (props) => {
    return (
        <>
        <nav>
            {props.mode==='dark'? <button className="btn bg-gray-400 hover:bg-gray-300 float-right mr-6 mt-6 p-2 rounded-full  " onClick={props.togglemode}>
            <LightModeIcon/>
            </button>:<button className="btn bg-gray-400 hover:bg-gray-300 float-right mr-6 mt-6 p-2 rounded-full " onClick={props.togglemode}>
            <DarkModeIcon/>
            </button>}
            <ul className='mt-52 float-right hidden lg:block relative '>
                <li>
                
                    <a href="/" className="btn bg-[#05F2F2] hover:bg-gray-300 float-right my-3  p-2  rounded-full  flex"> <span className='mt-1 font-medium  mx-4 hidden hover:block ' >HOME</span><HomeIcon className='hover:block' sx={{ fontSize: 30 }} /> </a>
                </li>
                <li>
                    <a href="/" className="btn bg-[#05F2F2] hover:bg-gray-300 float-right my-3  p-2 rounded-full flex"><span className='mt-1 font-medium ' >HOME</span> <AccountCircleIcon sx={{ fontSize: 30 }} /> </a>
                </li>
                <li>
                    <a href="/" className="btn bg-[#05F2F2] hover:bg-gray-300 float-right my-3  p-2 rounded-full "> <MailIcon sx={{ fontSize: 30 }} /> </a>
                </li>
            </ul>
            </nav>
        </>
    )
}

export default ModeBtn
