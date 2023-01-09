import React from 'react'
import man from "./man-modified.png"
import manlg from "./man.jpg"
import "./home.css"
const Home = () => {
    return (
        <>
            <div className="color-block hidden lg:block"></div>
            <div className=" lg:hidden  justify-center align-middle  w-[50%] m-auto">
                <img src={man} alt="man" className='mt-6  m-auto' />
            </div>

            <div className="lg:flex  ">
                <div className='lg_image boder lg:block rounded-2xl hidden  mt-48 ml-28 h-96 w-[35%]  z-10'>
                <img src={manlg} alt="man" className=' h-[100%] w-[100%] rounded-xl border border-[#05F2F2]' />
                </div>
                <div className="float-right lg:mt-52 lg:mr-0 mr-20 md:mr-28 space-x-2 mt-8 justify-center align-middle  w-[50%] m-auto">
                    <h1 className='font-bold  md:text-4xl text-4xl lg:text-5xl text-[#05F2F2] lg:flex'><span className='lg:block hidden'>-</span> I'M  MOHD SOHEL <span className='md:hidden'>.</span></h1>
                    <h2 className='font-bold text-2xl sm:text-3xl lg:text-4xl mt-3 text-[white] sm:text-center md:text-center sm:w-[50%] '>WEB DESIGNER</h2>
                    <p className='text-white mt-4 lg:mt-8 lg:text-xl'>Hey! Myself Mohd Sohel Salmani, an Indian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                </div>
            </div>

            {/* <div className="float-right mt-72 ">hello</div> */}
        </>
    )
}

export default Home
