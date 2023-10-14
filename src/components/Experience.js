import React from 'react'
import WorkIcon from '@mui/icons-material/Work';
import experience from './jsonfiles/experience';

const Experience = () => {
    // const {year} = experience;
    console.log(experience)
    return (
        <>
        
            <div className=" grid md:grid-cols-2 grid-cols-1 w-[100%] mb-28 ">
                {experience.map((element)=>{
                    return <div className=' 1st mt-12 ' key={element.id}>
                        <div className="bachelor  ">
                            <span className="  border w-[20%] rounded-full p-2 bg-[#05F2F2] text-black"><WorkIcon /></span>
                            <span className='mx-4 border px-3  rounded-xl text-sm bg-[#323232] text-gray-200' >{element.year} </span>
                        </div>

                        <div className="ml-12 mt-4">
                            <span className='font-bold text-[1.1rem]'> {element.education} </span>
                            <span className='font-bold text-[1 rem] text-gray-400'>- {element.university} </span>
                        </div>

                        <div className="ml-12 text-sm font-semibold mt-4 text-gray-400">
                            {element.desc}
                        </div>
                    </div>
                })}

            </div>
        </>
    )
}

export default Experience
