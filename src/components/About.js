import React, { useEffect } from 'react'
import Achievement from './Achievement'
import Experience from './Experience'
import Skills from './Skills'

import "../assets/Button.css"
import DownloadIcon from '@mui/icons-material/Download';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <> 

        
        <div className='text-white'>
            <div className='header_slide-left mr-28 lg:mr-16'>
                <h2 className=' mt-20 w-[54%] justify-center m-auto  float-right font-bold  md:text-4xl text-3xl lg:text-6xl text-white lg:mr-20 mb-6'>ABOUT <span className='text-[#05F2F2] ' >ME</span></h2>
            </div>
            
            <hr className='m-auto w-[80%]  mt-10'/>
            <div className='fade-in Personal w-[62%] m-auto  float-right   mr-16 lg:mr-0'>
                <h2 className='mt-10 font-bold  md:text-2xl text-xl lg:text-2xl'>PERSONAL INFORMATION</h2>
            </div>
            <div className='info m-auto w-[80%] mt-36 flex '>
                    <ul className='grid grid-rows-2 grid-cols-2 mb-16'>
                        <li className='slide-right'>
                            <span className='font-semibold lg:text-xl  text-md opacity-[0.8]'>First Name: </span>
                            <span  className='font-bold text-md  lg:text-2xl md:text-xl'>Mohd Sohel</span>                        
                            {/* <span  className='font-bold text-2xl'>Mohd Sohel</span>                         */}
                        </li>
                        <li className='slide-left ml-6 lg:ml-60'>
                            <span className='font-semibold lg:text-xl text-md  opacity-[0.8]'>Last Name: </span>
                            <span  className='font-bold text-md lg:text-2xl md:text-xl'>Salmani</span>                        
                        </li>
                        <li className='slide-right mt-4'>
                            <span className='font-semibold lg:text-xl text-md  opacity-[0.8]'>Email: </span>
                            <span  className='font-bold text-sm lg:text-2xl md:text-xl '>salmanisohail26@gmail.com </span>
                        </li>
                        <li className='slide-left mt-4 ml-6 lg:ml-60'>
                            <span className='font-semibold lg:text-xl  text-md opacity-[0.8]'>Age: </span>
                            <span  className='font-bold text-md lg:text-2xl md:text-xl'>19 Years </span>
                        </li>
                        <li className='slide-right mt-4'>
                            <span className='font-semibold lg:text-xl text-md  opacity-[0.8]'>Nationality: </span>
                            <span  className='font-bold text-md lg:text-2xl md:text-xl'>Indian </span>
                        </li>
                        <li className='slide-left mt-4 ml-6 lg:ml-60'>
                            <span className='font-semibold lg:text-xl  text-md opacity-[0.8]'>For Intern: </span>
                            <span  className='font-bold text-md lg:text-2xl md:text-xl text-green-500'>Available </span>
                        </li>
                        <li className='slide-right mt-4'>
                            <span className='font-semibold lg:text-xl text-md  opacity-[0.8]'>Phone: </span>
                            <span  className='font-bold text-md lg:text-2xl md:text-xl'>+91 9960997558 </span>
                        </li>
                    </ul>
                </div>
                <div>
                    <a href="images/resume.pdf" download className='button download_left font-bold px-2 border border-white ml-20  lg:ml-[34rem] '>Download Cv <span><DownloadIcon/></span> </a>
                </div>
                
            <hr className='m-auto w-[80%]  mt-10'/>

                
            <div className='Personal w-[56%] m-auto  float-right  mb-10  lg:mr-0 '>
                <h2 className='mt-10 font-bold  md:text-2xl text-xl lg:text-2xl'>MY SKILLS</h2>
            </div>
            {/* lg:mr-48 */}
            <div className='skill-box float-right mr-28 md:mr-36 '>
                <Skills/>
            </div>

            <hr className='m-auto w-[80%]  mt-10'/>

            <div className='Personal w-[62%] m-auto  float-right   mr-12 md:mr-16 lg:mr-0 '>
                <h2 className='mt-10 font-bold  md:text-2xl text-xl lg:text-2xl'>EXPERIENCE & EDUCATION</h2>
            </div>
            <div className=' ml-12 lg:ml-32  mt-8 lg:mt-24 '>
                <Experience/>
            </div>

            <hr className='m-auto w-[80%]  mt-10'/>

            <div className='Personal w-[62%] m-auto  float-right   mr-12 md:mr-16 lg:mr-0 '>
                <h2 className='mt-10 font-bold  md:text-2xl text-xl lg:text-2xl'>AWARDS & ACHIEVEMENT </h2>
            </div>

            <div className=' ml-12  lg:ml-24  mt-8 lg:mt-24 mb-24 lg:mb-12'>
                <Achievement/>
            </div>

            



        </div>
        </>
    )
}

export default About
