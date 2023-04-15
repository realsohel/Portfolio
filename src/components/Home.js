import React, { useEffect } from 'react'

import "../assets/home.css"
import "../assets/Button.css"
import DownloadIcon from '@mui/icons-material/Download';
const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.zoom = "100%";
    }, [])

    return (
        <>
        {/* color-block hidden lg:block */}
        <div id="pt-main" className="pt-perspective" >
            <div className="pt-page pt-page-1">
                <div className=" ">
                    <div className="color-block hidden lg:block"></div>
                    <div className="fade-in lg:hidden  justify-center align-middle  w-[50%] m-auto">
                        <img src="/images/my_pic_mobile.png" alt="man" className='mt-6  m-auto' />
                    </div>

                    <div className="lg:flex   ">
                        <div className='lg_image boder lg:block rounded-3xl hidden  mt-12 ml-24 h-[34rem] w-[40%]  z-10'>
                        <img src="/images/my_pic.jpeg" alt="man" className='img_slide_right h-[100%] w-[78%]  rounded-3xl border border-[#05F2F2]' />
                        </div>
                        <div className="fade-in float-right lg:mt-52 lg:mr-10 mr-0 md:mr-28 space-x-6 mt-8 justify-center align-middle  lg:w-[50%] m-auto sm:mb-32 lg:mb-0">
                            <h1 className=' font-bold   text-4xl lg:text-5xl text-[#05F2F2] lg:flex ml-12 lg:ml-0'><span className='lg:block hidden'>-</span> I'M  MOHD SOHEL <span className='md:hidden'>!</span></h1>
                            <h2 className=' font-bold text-2xl sm:text-3xl lg:text-4xl mt-3 text-[white] w-[100%] px-6 lg:px-0'>WEB DEVELOPER </h2>
                            <p className=' text-white mt-4 lg:mt-8 text-lg lg:text-xl lg:w-[90%] w-[100%] mb-6'>
                                Hey! Myself Mohd Sohel Salmani, an Indian based web designer & front‑end developer, passionate about building excellent
                                websites that improves the lives of those around me. Currently studying back-end development as well.
                            </p>
                            <div>
                                <a href="images/resume.pdf" download className='button download_left font-bold px-2 border border-white'>Download Cv <span><DownloadIcon/></span> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            


        </>
    )
}

export default Home
