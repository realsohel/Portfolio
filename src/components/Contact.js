import React, { useState } from 'react'
import 'animate.css';
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
import Alertcon from './Alertcon';

const Contact = (props) => {

    const[user , setUser] = useState({name: "", email: "", subject:"" , msg:""});
    const [alert, setAlert] = useState({msg:""});

    const showAlert = (message,type)=>{
        setAlert({
            msg: message,
            type:type
        })
        setTimeout(() => {
            setAlert({msg:""});
            document.getElementById('alertdiv').style.display="none";
        }, 4000);
    }
    

    const onChange = (e)=>{
        setUser({...user , [e.target.name]:e.target.value});
    }

    const PostData= async(e)=>{
        e.preventDefault();
        const {name, email, subject,msg} = user;

        if(name && email &&  subject&& msg){
            const res = await fetch( // Connecting to Database.
                "https://portfoliocontactform-9cf5b-default-rtdb.firebaseio.com/contactform.json",
                {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify({
                        name,email,subject,msg,
                    }),
                }
            );

            if(res){
                setUser({name: "", email: "", subject:"" , msg:""});
                document.getElementById('alertdiv').style.display="block";
                showAlert("Your message have been successfully submitted." , "success");
                
                
            }
        }
        else{
            document.getElementById('alertdiv').style.display="block";
            showAlert("Please fill all the fields.","error");
        }

        
    }

    return (
        <>
        <div className='text-white'>
            <div className='mr-24 sm:mr-48 lg:mr-16'>
                <h2 className=' mt-20 ml-20  sm:w-[54%] justify-center  float-right font-bold  md:text-4xl text-3xl  lg:text-6xl text-white lg:mr-32 mb-6 '>GET IN <span className='text-[#05F2F2] ' >TOUCH</span></h2>
            </div>

        <div className=" float-right w-[75%] md:w-[40%] lg:w-[30%] fixed right-0 animate__animated  animate__backInRight hidden z-[120]" id='alertdiv'><Alertcon alert={alert}  /></div>

        

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
                        <a  href="https://www.facebook.com/sohail.salmani.3975" rel="noreferrer" target="_blank"><span className='w-[20%] rounded-full p-2 bg-[#05F2F2] text-black hover:bg-gray-300'><FacebookIcon/></span></a>
                        <a  href="https://www.instagram.com/sohail.salmani.400054/" rel="noreferrer" target="_blank"><span className='w-[20%] rounded-full p-2 bg-[#05F2F2] text-black hover:bg-gray-300'><InstagramIcon/></span></a>
                        <a  href="https://twitter.com/real_sohel_" rel="noreferrer" target="_blank"><span className='w-[20%] rounded-full p-2 bg-[#05F2F2] text-black hover:bg-gray-300'><TwitterIcon/></span></a>
                        <a  href="https://www.linkedin.com/in/mohd-sohel-salmani-957603226/" rel="noreferrer" target="_blank"><span className='w-[20%] rounded-full p-2 bg-[#05F2F2] text-black hover:bg-gray-300'><LinkedInIcon/></span></a>
                        <a  href="https://github.com/realsohel" rel="noreferrer" target="_blank"><span className='w-[20%] rounded-full p-2 bg-[#05F2F2] text-black hover:bg-gray-300'><GitHubIcon/></span></a>
                    </div>

                </div>
                <hr className='block md:hidden'/>



                <div className="ml-6 lg:ml-16 mt-10 mb-20">
                    <form className="form mr-32" method='POST'>
                        <div className="md:flex md:space-x-6">
                        <span><input type="text" className='rounded-3xl px-16 py-2 bg-[#2f3235] outline-[#05F2F2] border text-center  '  value={user.name} name='name' placeholder='Enter Your Name' autoComplete='off' onChange={onChange} required/></span>
                        <span><input type="email" className='rounded-3xl px-16 py-2 bg-[#2f3235] outline-[#05F2F2] border text-center mt-6 md:mt-0' value={user.email} name='email' placeholder='Enter Your Email' autoComplete='off' onChange={onChange} required/></span>
                        </div>

                        <div >
                        <input type="text" className='rounded-3xl px-16 py-2 bg-[#2f3235] outline-[#05F2F2] border text-center  mt-6 lg:mt-12 md:w-[100%]' value={user.subject} name='subject' placeholder='Your Subject' autoComplete='off' onChange={onChange} required/>
                        </div>
                        <div >
                        <textarea  className='rounded-[2rem] px-20 py-2 bg-[#2f3235] h-56 outline-[#05F2F2] border text-center  mt-6 lg:mt-12 md:w-[100%]' value={user.msg} name='msg' placeholder='Your Message' autoComplete='off' onChange={onChange} required/>
                        </div>

                        <div className="mt-12 ">
                        <button onClick={PostData} className="button font-bold ">SEND MESSAGE  <span ><SendIcon/></span></button>
                        
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact
