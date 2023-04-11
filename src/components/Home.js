import React, { useEffect } from 'react'
// import manlg from "./man.jpg"

import "./home.css"
// import "./animation.css"
const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
        {/* color-block hidden lg:block */}
        <div id="pt-main" className="pt-perspective" >
            <div className="pt-page pt-page-1">
                <div className=" ">
                    <div className="color-block hidden lg:block"></div>
                    <div className=" lg:hidden  justify-center align-middle  w-[50%] m-auto">
                        <img src="/images/my_pic_mobile.png" alt="man" className='mt-6  m-auto' />
                    </div>

                    <div className="lg:flex   ">
                        <div className='lg_image boder lg:block rounded-3xl hidden  mt-12 ml-24 h-[34rem] w-[40%]  z-10'>
                        <img src="/images/my_pic.jpeg" alt="man" className=' h-[100%] w-[78%]  rounded-3xl border border-[#05F2F2]' />
                        </div>
                        <div className="float-right lg:mt-52 lg:mr-10 mr-20 md:mr-28 space-x-2 mt-8 justify-center align-middle  w-[50%] m-auto sm:mb-32 lg:mb-0">
                            <h1 className='font-bold  md:text-4xl text-4xl lg:text-5xl text-[#05F2F2] lg:flex'><span className='lg:block hidden'>-</span> I'M  MOHD SOHEL <span className='md:hidden'>.</span></h1>
                            <h2 className='font-bold text-2xl sm:text-3xl lg:text-4xl mt-3 text-[white] sm:text-center md:text-center sm:w-[50%]'>WEB DESIGNER</h2>
                            <p className='text-white mt-4 lg:mt-8 lg:text-xl w-[90%] mb-24'>
                                Hey! Myself Mohd Sohel Salmani, an Indian based web designer & 
                                front‑end developer, passionate about building excellent
                                websites that improves the lives of those around me. Also currently learning Back-send development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            


        </>
    )
}

export default Home
