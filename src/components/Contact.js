import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import "./Button.css"

import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {

    const[note , setNote] = useState({name: "YOUR NAME", email: "YOUR EMAIL", subject:"YOUR SUBJECT" , msg:"YOUR MESSAGE"});
    

    const onChange = (e)=>{
        setNote({...note , [e.target.name]:e.target.value});
    }

    return (
        <>
        <div className='text-white'>
            <div className='mr-24 sm:mr-48 lg:mr-16'>
                <h2 className=' mt-20 ml-20  sm:w-[54%] justify-center  float-right font-bold  md:text-4xl text-3xl  lg:text-6xl text-white lg:mr-32 mb-6 '>GET IN <span className='text-[#05F2F2] ' >TOUCH</span></h2>
            </div>

            <div className="block lg:flex mt-8 lg:mt-12 float-right w-[100%]">
                <div className="message ml-6 lg:ml-16 ">

                    <div className="md:text-3xl text-2xl  lg:text-4xl font-bold ">DON'T BE SHY !</div>
                    <div className="mt-4 lg:mt-6 font-semibold">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</div>
                    
                    <div className=' 1st mt-8 lg:mt-10'>
                        <div >
                            <span className="   w-[20%] rounded-full p-2 bg-[#05F2F2] text-black"><LocationOnIcon /></span>
                            <span className='mx-4 border px-3  rounded-xl text-sm bg-[#323232] text-gray-200' >ADDRESS: </span>
                        </div>

                        <div className="ml-12 mt-2">
                            <span className='font-bold '> A/103, Star Apt, Santacruz(W),<br /> Mumbai-400054 </span>
                        </div>
                    </div>

                    <div className=' 2nd mt-4 lg:mt-8'>
                        <div >
                            <span className="   w-[20%] rounded-full p-2 bg-[#05F2F2] text-black"><EmailIcon /></span>
                            <span className='mx-4 border px-3  rounded-xl text-sm bg-[#323232] text-gray-200' >MAIL ME: </span>
                        </div>

                        <div className="ml-12 mt-2">
                            <span className='font-bold '> salmanisohail26@gmail.com </span>
                        </div>
                    </div>

                    <div className=' 3rd mt-4 lg:mt-8'>
                        <div >
                            <span className="   w-[20%] rounded-full p-2 bg-[#05F2F2] text-black"><CallIcon /></span>
                            <span className='mx-4 border px-3  rounded-xl text-sm bg-[#323232] text-gray-200' >CALL ME: </span>
                        </div>

                        <div className="ml-12 mt-2">
                            <span className='font-bold '> +91 9960997558 </span>
                        </div>
                    </div>

                    <div className="social-media mt-12 space-x-4 mb-8">
                        <a  href="https://www.facebook.com/sohail.salmani.3975" rel="noreferrer" target="_blank"><span className='w-[20%] rounded-full p-2 bg-[#05F2F2] text-black'><FacebookIcon/></span></a>
                        <a  href="https://www.instagram.com/sohail.salmani.400054/" rel="noreferrer" target="_blank"><span className='w-[20%] rounded-full p-2 bg-[#05F2F2] text-black'><InstagramIcon/></span></a>
                        <a  href="https://twitter.com/real_sohel_" rel="noreferrer" target="_blank"><span className='w-[20%] rounded-full p-2 bg-[#05F2F2] text-black'><TwitterIcon/></span></a>
                        <a  href="https://www.linkedin.com/in/mohd-sohel-salmani-957603226/" rel="noreferrer" target="_blank"><span className='w-[20%] rounded-full p-2 bg-[#05F2F2] text-black'><LinkedInIcon/></span></a>
                        <a  href="https://github.com/realsohel" rel="noreferrer" target="_blank"><span className='w-[20%] rounded-full p-2 bg-[#05F2F2] text-black'><GitHubIcon/></span></a>
                    </div>

                </div>
                <div className="ml-6 lg:ml-16 mt-10 mb-20">
                    <div className="form mr-32">
                        <div className="md:flex md:space-x-6">
                        <span><input type="text" className='rounded-3xl px-16 py-2 bg-[#2f3235] outline-[#05F2F2] border text-center  '  value={note.name} name='name' onChange={onChange}/></span>
                        <span><input type="email" className='rounded-3xl px-16 py-2 bg-[#2f3235] outline-[#05F2F2] border text-center mt-6 md:mt-0' value={note.email} name='email' onChange={onChange}/></span>
                        </div>

                        <div >
                        <input type="text" className='rounded-3xl px-16 py-2 bg-[#2f3235] outline-[#05F2F2] border text-center  mt-6 lg:mt-12 md:w-[100%]' value={note.subject} name='subject' onChange={onChange}/>
                        </div>
                        <div >
                        <textarea  className='rounded-[2rem] px-20 py-2 bg-[#2f3235] h-56 outline-[#05F2F2] border text-center  mt-6 lg:mt-12 md:w-[100%]' value={note.msg} name='subject' onChange={onChange}/>
                        </div>

                        <div className="mt-12 ">
                        <a href="/" className="button font-bold ">SEND MESSAGE  <span ><SendIcon/></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact
