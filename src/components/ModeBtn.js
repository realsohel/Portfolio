import React from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
// import HomeIcon from '@mui/icons-material/Home';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
// import { Link } from 'react-router-dom';

const ModeBtn = (props) => {
    return (
        <>
            <div className=''>
                
            {props.mode==='dark'? <button className="btn bg-gray-400 hover:bg-gray-300 float-right mr-6 mt-6 p-2 rounded-full  fixed right-0 z-50" onClick={props.togglemode}>
            <LightModeIcon/>
            </button>:<button className="btn bg-gray-400 hover:bg-gray-300 float-right  mr-6 mt-6 p-2 rounded-full fixed right-0 z-50" onClick={props.togglemode}>
            <DarkModeIcon/>
            </button>}
            
            </div>
            
        </>
    )
}

export default ModeBtn
