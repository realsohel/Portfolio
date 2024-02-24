import React, { useEffect } from 'react'

import "../assets/home.css"
import "../assets/Button.css"
import DownloadIcon from '@mui/icons-material/Download';
const Home = () => {
    
    document.title="MohdSohelPortfolio-Home";

    useEffect(() => {
        window.scrollTo(0, 0);
        
    }, [])

    return (
        <>
        {/* color-block hidden lg:block */}
        <div className=''> 
            <div className="color-block hidden lg:block"></div>
            <div className="fade-in lg:hidden  justify-center align-middle  w-[50%] m-auto">{/* MOBILE IMG */}
                <img src="/images/my_pic_mobile.png" alt="man" className='slide-down mt-6  m-auto' />
            </div>

            <div className="lg:flex   "> 
                <div className='lg_image boder lg:block rounded-3xl hidden  mt-12 ml-24 h-[34rem] w-[40%]  z-10'> {/* LAPTOP IMG */}
                <img src="/images/my_pic.jpeg" alt="man" className='img_slide_right h-[100%] w-[78%]  rounded-3xl border border-[#05F2F2]' />
                </div>
                <div className="fade-in  lg:mt-28 lg:mr-10 mr-6 md:mr-28 space-x-6 mt-8 justify-center align-middle  lg:w-[50%] m-auto md:mb-40 lg:mb-0">
                    <h1 className=' font-bold  text-4xl lg:text-5xl text-[#05F2F2] lg:flex ml-6 lg:ml-0'><span className='lg:block hidden'>-</span> I'M  MOHD SOHEL <span className='md:hidden'>!</span></h1>
                    <h2 className=' font-bold text-2xl sm:text-3xl lg:text-4xl mt-3 text-[white] w-[100%] px-1 lg:px-0'>WEB DEVELOPER </h2>
                    <p className=' text-white mt-4 lg:mt-8 text-lg lg:text-xl lg:w-[90%] mb-6 flex flex-col'>
                        <span className='my-2'>
                            Hey! Myself Mohd Sohel Salmani, an entry-level Indian based full-stack web developer with 1.5 years of experience, more focused on front‑end development, passionate about building excellent websites that improves the lives of those around me. 
                        </span>
                        <span>
                            I am a person who’s always learning, passionate about exploring tools and technology to help me enhance my daily life. I work well in a team and support my team members in places I can assist. I have worked on multiple projects in various fields both as part of a team and by myself.
                        </span>
                    </p>
                    <div>
                        <a href="images/SohelCV.pdf" download className='button download_left_slide font-bold px-2 border border-white'>Download My CV <span><DownloadIcon/></span> </a>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Home  
