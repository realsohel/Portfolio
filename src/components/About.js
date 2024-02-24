import React, { useEffect } from 'react'
import Achievement from './Achievement'
import Experience from './Experience'

import "../assets/Button.css"
import DownloadIcon from '@mui/icons-material/Download';
import CircularBar from './CircularBar'
import skills from './jsonfiles/skills'

const About = () => {
    document.title="MohdSohelPortfolio-AboutMe"

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const calculateAge=(birthDate) =>{
        var currentDate = new Date();
        var birthYear = birthDate.getFullYear();
        var birthMonth = birthDate.getMonth();
        var birthDay = birthDate.getDate();

        var currentYear = currentDate.getFullYear();
        var currentMonth = currentDate.getMonth();
        var currentDay = currentDate.getDate();

        var age = currentYear - birthYear;

        // If the current month and day are before the birth month and day, subtract 1 from the age
        if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
            age--;
        }

        return age;
    }
    
    return (
        <> 

        <div className='text-white'>
            <div className='header_slide-left mr-28 lg:mr-16'>
                <h2 className=' mt-20 w-[54%] justify-center m-auto  float-right font-bold  md:text-4xl text-3xl lg:text-6xl text-white lg:mr-20 mb-6'>
                    ABOUT 
                    <span className='text-[#05F2F2] ' >
                        ME
                    </span>
                </h2>
            </div>
            
            <hr className='m-auto w-[80%]  mt-10'/>
            <div className='fade-in Personal w-[62%] m-auto  float-right   mr-16 lg:mr-0'>
                <h2 className='mt-10 font-bold  md:text-2xl text-xl lg:text-2xl my-4'>
                    PERSONAL INFORMATION
                </h2>
            </div>
            <div className='info paddings innerWidth flexCenter '>
                    <ul className=' md:grid grid-rows-2 grid-cols-2 mb-8'>
                        <li className='slide-right'>
                            <span className='font-semibold lg:text-xl  text-md opacity-[0.8] my-2'>First Name: </span>
                            <span  className='font-bold text-md  lg:text-2xl md:text-xl my-2'>Mohd Sohel</span>            
                        </li>
                        <li className='slide-left md:ml-6 lg:ml-36'>
                            <span className='font-semibold lg:text-xl text-md  opacity-[0.8] my-2'>Last Name: </span>
                            <span  className='font-bold text-md lg:text-2xl md:text-xl my-2'>Salmani</span>                        
                        </li>
                        <li className='slide-right mt-4'>
                            <span className='font-semibold lg:text-xl text-md  opacity-[0.8] my-2'>Email: </span>
                            <span  className='font-bold text-sm lg:text-2xl md:text-xl my-2'>salmanisohail26@gmail.com </span>
                        </li>
                        <li className='slide-left mt-4 md:ml-6 lg:ml-36'>
                            <span className='font-semibold lg:text-xl  text-md opacity-[0.8] my-2'>Age: </span>
                            <span  className='font-bold text-md lg:text-2xl md:text-xl my-2'>{calculateAge(new Date(2003,5,10))} </span>
                        </li>
                        <li className='slide-right mt-4'>
                            <span className='font-semibold lg:text-xl text-md  opacity-[0.8] my-2'>Nationality: </span>
                            <span  className='font-bold text-md lg:text-2xl md:text-xl my-2'>Indian </span>
                        </li>
                        <li className='slide-left mt-4 md:ml-6 lg:ml-36'>
                            <span className='font-semibold lg:text-xl  text-md opacity-[0.8] my-2'>For Intern: </span>
                            <span  className='font-bold text-md lg:text-2xl md:text-xl text-[#05F2F2] my-2'>Available </span>
                        </li>
                        <li className='slide-right mt-4'>
                            <span className='font-semibold lg:text-xl text-md  opacity-[0.8]'>Phone: </span>
                            <span  className='font-bold text-md lg:text-2xl md:text-xl'>+91 9960997558 </span>
                        </li>
                    </ul>
                </div>
                <div className='md:ml-8'>
                    <a href="images/SohelCV.pdf" download className='button download_left font-bold px-2 border border-white ml-20  lg:ml-[34rem] '>Download My CV <span><DownloadIcon/></span> </a>
                </div>
                
            <hr className='m-auto w-[80%]  mt-10'/>

                
            <div className='Personal  '>
                <h2 className='paddings innerWidth flexCenter mt-10 font-bold  md:text-2xl text-xl lg:text-2xl'>MY SKILLS</h2>
            </div>
            {/* lg:mr-48 */}
            <div className='paddings innerWidth flexCenter skill-box'>
                {/* <Skills/> */}

                {skills.map((e,index)=>{
                    return <div className="mx-2" key={index}>
                        <CircularBar value={100} name={e.name}/>
                    </div>
                })}
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
