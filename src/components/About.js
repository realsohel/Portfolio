import React from 'react'
import Skills from './Skills'

const About = () => {
    return (
        <> 
        <div className='text-white'>
            <div className='mr-28 lg:mr-16'>
                <h2 className=' mt-20 w-[54%] justify-center m-auto  float-right font-bold  md:text-4xl text-3xl lg:text-6xl text-white lg:mr-20 mb-6'>ABOUT <span className='text-[#05F2F2] ' >ME</span></h2>
            </div>
            <hr className='m-auto w-[80%]  mt-10'/>
            <div className='Personal w-[62%] m-auto  float-right   mr-16 lg:mr-0'>
                <h2 className='mt-10 font-bold  md:text-2xl text-xl lg:text-2xl'>PERSONAL INFORMATION</h2>
            </div>
            <div className='info m-auto w-[80%] mt-36 flex '>
                    <ul className='grid grid-rows-2 grid-cols-2 mb-16'>
                        <li >
                            <span className='font-semibold lg:text-xl  text-md opacity-[0.8]'>First Name: </span>
                            <span  className='font-bold text-md  lg:text-2xl md:text-xl'>Mohd Sohel</span>                        
                            {/* <span  className='font-bold text-2xl'>Mohd Sohel</span>                         */}
                        </li>
                        <li className='ml-6 lg:ml-60'>
                            <span className='font-semibold lg:text-xl text-md  opacity-[0.8]'>Last Name: </span>
                            <span  className='font-bold text-md lg:text-2xl md:text-xl'>Salmani</span>                        
                        </li>
                        <li className='mt-4'>
                            <span className='font-semibold lg:text-xl text-md  opacity-[0.8]'>Email: </span>
                            <span  className='font-bold text-sm lg:text-2xl md:text-xl '>salmanisohail26@gmail.com </span>
                        </li>
                        <li className='mt-4 ml-6 lg:ml-60'>
                            <span className='font-semibold lg:text-xl  text-md opacity-[0.8]'>Age: </span>
                            <span  className='font-bold text-md lg:text-2xl md:text-xl'>19 </span>
                        </li>
                        <li className='mt-4'>
                            <span className='font-semibold lg:text-xl text-md  opacity-[0.8]'>Nationality: </span>
                            <span  className='font-bold text-md lg:text-2xl md:text-xl'>Indian </span>
                        </li>
                        <li className='mt-4 ml-6 lg:ml-60'>
                            <span className='font-semibold lg:text-xl  text-md opacity-[0.8]'>For Intern: </span>
                            <span  className='font-bold text-md lg:text-2xl md:text-xl text-green-500'>Available </span>
                        </li>
                        <li className='mt-4'>
                            <span className='font-semibold lg:text-xl text-md  opacity-[0.8]'>Phone: </span>
                            <span  className='font-bold text-md lg:text-2xl md:text-xl'>+91 9960997558 </span>
                        </li>
                    </ul>
                </div>
                
            <hr className='m-auto w-[80%]  mt-10'/>

                
            <div className='Personal w-[56%] m-auto  float-right  mb-10  lg:mr-0 '>
                <h2 className='mt-10 font-bold  md:text-2xl text-xl lg:text-2xl'>MY SKILLS</h2>
            </div>
            {/* lg:mr-48 */}
            <div className='skill-box float-right mr-28 md:mr-36 '>
                <Skills/>
            </div>
            









            {/* <div className=" info float-right  lg:float-none lg:flex ml-16  flex-col lg:flex-row ">
                <div className="perosnalinfo mt-12 md:mt-20 lg:mt-60 md:mr-[60px] lg:mr-0">
                    <h3 className='font-bold  md:text-2xl text-xl lg:text-2xl ml-28 lg:ml-0 '> PERSONAL INFOS</h3>
                    <ul className='grid grid-rows-2 grid-cols-2 flex-row mt-2'>
                        <li className='mt-4'>
                            <span className='font-semibold text-md   opacity-[0.8]'>First Name: </span>
                            <span  className='font-bold '>Mohd Sohel</span>
                        </li>
                        <li className='mt-4'>
                            <span className='font-semibold text-md mt-4 opacity-[0.8]'>Last Name: </span>
                            <span  className='font-bold '>Salmani </span>
                        </li>
                        <li className='mt-4'>
                            <span className='font-semibold text-md mt-4  opacity-[0.8]'>Age: </span>
                            <span  className='font-bold '>19</span>
                        </li>
                        <li className='mt-4'>
                            <span className='font-semibold text-md mt-4  opacity-[0.8]'>Nationality: </span>
                            <span  className='font-bold '>Indian </span>
                        </li>
                        <li className='mt-4'>
                            <span className='font-semibold text-md mt-4  opacity-[0.8]'>Phone: </span>
                            <span  className='font-bold '>+91 9960997558</span>
                        </li>
                        <li className='mt-4 '>
                            <span className='font-semibold text-md   opacity-[0.8]'>Email: </span>
                            <span  className='font-bold ml-2'>salmanisohail26@gmail.com </span>
                        </li>
                        <li className='mt-4'>
                            <span className='font-semibold text-md mt-4 opacity-[0.8] '>For Intern: </span>
                            <span  className='font-bold text-green-500'>Available</span>
                        </li>
                        
                    </ul>
                    
                </div>
                
            </div> */}


        </div>
        </>
    )
}

export default About
