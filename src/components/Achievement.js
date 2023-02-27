import React from 'react'
import achievement from './jsonfiles/achievement'

const Achievement = () => {
    return (
        <>

{/* border-2 border-[#05F2F2] */}
            <div className="main-box grid lg:grid-cols-2 grid-cols-1 w-[100%] mt-28">
                {achievement.map((a)=>{
                    return <div className="card    h-auto mr-4   md:mr-24 mt-8 rounded-md shadow-lg shadow-cyan-500/50">
                                <div className="corner-img float-right  w-20 h-20 m-2">
                                    <img src={a.img} alt="" />
                                </div>
                                <div className="numbers  m-4  font-bold text-2xl md:text-3xl text-[#05F2F2]">
                                    <i> {a.name} </i>
                                </div>
                                <div className="font-semibold text-[1.1rem] mx-3 mb-3">
                                    {a.desc}
                                </div>
                            </div>
                })}
                
            </div>
        </>
    )
}

export default Achievement
