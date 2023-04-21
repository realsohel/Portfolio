import React, { useEffect } from 'react'
// import manlg from "images/man.jpg"
// import tictactoe from "./tictactoe.jpg"
// import passwordgenerator from "./passwordgenerator.jpg"
import portfolio from './jsonfiles/portfolio'
import "../assets/portfolio.css"


const Portfolio = () => {

    document.title="MohdSohelPortfolio-MyPortfolio"

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
        <div>
            <div className='slide_left mr-24 sm:mr-48 lg:mr-16'>
                <h2 className=' mt-20 ml-20  sm:w-[54%] justify-center  float-right font-bold  md:text-4xl text-3xl  lg:text-6xl text-white lg:mr-32 mb-6 '>MY<span className='text-[#05F2F2] ' > PORTFOLIO</span></h2>
            </div>

            <div className="card-box block md:flex md:flex-wrap   lg:mt-4   float-right w-[92%]   mb-48">
                
                {portfolio.map((e)=>{

                    return <div key={e.id} className="card  fade-in shadow-lg shadow-cyan-500/50 w-[100%] md:w-[35%] lg:w-[25%] h-[350px] md:h-[390px] lg:h-[360px] mt-10 float-right rounded-md mr-4 md:ml-16 lg:ml-8  ">
                        <a href={e.link} target={"_blank"} rel="noreferrer" >
                            <img src={e.img} alt="" className='fade-in lg:max-w-[100%] w-[800px] h-[200px] lg:h-[198px] rounded-md hover:opacity-80 cursor-pointer' /></a>

                        <div className="fade-in ml-2 font-medium mt-2 text-white">{e.desc?e.desc.slice(0,70):""}...</div>

                        <a href={e.link} rel="noreferrer" target={"_blank"} className=' ml-2 text-sm  text-white mt-2 mb-2'>Github Link: <span className='text-blue-400'> {e.link?e.link.slice(0,27):""}...</span></a>

                        <div className="ml-2 mt-4   absolute transform  font-bold  bg-[#05F2F2] text-xl outline-none px-2 rounded-md cursor-pointer"> <a href={e.link} rel="noreferrer" target={"_blank"} > {e.title}</a> </div>
                    </div>
                })}

            </div>

        </div>
        
        </>
    )
}

export default Portfolio
