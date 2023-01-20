import React from 'react'
import WorkIcon from '@mui/icons-material/Work';

const Experience = () => {
    return (
        <>
            <div className="grid md:grid-cols-2 grid-cols-1 w-[100%] mb-28">
                <div className='1st'>
                    <div className="bachelor  ">
                        <span className="  border w-[20%] rounded-full p-2 bg-[#05F2F2] text-black"><WorkIcon /></span>
                        <span className='mx-4 border px-3  rounded-xl text-sm bg-[#323232] text-gray-200' >2021 - PRESENT </span>
                    </div>

                    <div className="ml-12 mt-4">
                        <span className='font-bold text-[1.1rem]'> BACHELOR DEGREE </span>
                        <span className='font-bold text-[1 rem] text-gray-400'>- MUMBAI UNIVERSITY </span>
                    </div>

                    <div className="ml-12 text-sm font-semibold mt-4 text-gray-400">
                        Currently doing BSC Computer Science from R.D National College, Mumbai.
                    </div>

                </div>

                <div className='2nd mt-12 md:mt-0'>
                    <div className="bachelor  ">
                        <span className="  border w-[20%] rounded-full p-2 bg-[#05F2F2] text-black"><WorkIcon /></span>
                        <span className='mx-4 border px-3  rounded-xl text-sm bg-[#323232] text-gray-200' >2019 - 2021 </span>
                    </div>

                    <div className="ml-12 mt-4">
                        <span className='font-bold text-[1.1rem]'> SECONDARY EDUCATION </span>
                        <span className='font-bold text-[1 rem] text-gray-400'>- MAHARASHTRA BOARD </span>
                    </div>

                    <div className="ml-12 text-sm font-semibold mt-4 text-gray-400">
                        Completed HSC with 96% from R.D National College, Mumbai.
                    </div>
                </div>

                <div className='4th mt-12 lg:mt-20'>
                    <div className="bachelor  ">
                        <span className="  border w-[20%] rounded-full p-2 bg-[#05F2F2] text-black"><WorkIcon /></span>
                        <span className='mx-4 border px-3  rounded-xl text-sm bg-[#323232] text-gray-200' >2019</span>
                    </div>

                    <div className="ml-12 mt-4">
                        <span className='font-bold text-[1.1rem]'> PRIMARY EDUCATION </span>
                        <span className='font-bold text-[1 rem] text-gray-400'>- MAHARASHTRA BOARD </span>
                    </div>

                    <div className="ml-12 text-sm font-semibold mt-4 text-gray-400">
                        Completed SSC with 86% from B.P.M High School, Mumbai.
                    </div>
                </div>

                <div className='5th mt-12 lg:mt-20'>
                    <div className="bachelor  ">
                        <span className="  border w-[20%] rounded-full p-2 bg-[#05F2F2] text-black"><WorkIcon /></span>
                        <span className='mx-4 border px-3  rounded-xl text-sm bg-[#323232] text-gray-200' >PRESENT </span>
                    </div>

                    <div className="ml-12 mt-4">
                        <span className='font-bold text-[1.1rem]'> INDUSTRY EXPERIENCE </span>
                        <span className='font-bold text-[1 rem] text-gray-400'>- NONE </span>
                    </div>

                    <div className="ml-12 text-sm font-semibold mt-4 text-gray-400">
                        In the learning stage, hence Industry Experience is none.
                    </div>
                </div>


            </div>
        </>
    )
}

export default Experience
