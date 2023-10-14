import React from 'react'
import "../assets/Skills.css"

const Skills = () => {
    return (
        // mt-[1rem] grid grid-cols-4 relative
        <>
            <div className="box mr-0 ml-10 lg:mr-20 mb-28">
                <div className="progress first ">
                    <span className="progress-left">
                        <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                        <span className="progress-bar"></span>
                    </span>
                    <div className="progress-value font-bold ">80%</div>
                    <div className="language mt-40 justify-center text-center font-bold text-xl">HTML</div>
                </div>

                <div className="progress second ">
                    <span className="progress-left">
                        <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                        <span className="progress-bar"></span>
                    </span>
                    <div className="progress-value font-bold">75%</div>
                    <div className="language mt-40 justify-center text-center font-bold text-xl">CSS</div>
                </div>

                <div className="progress third ">
                    <span className="progress-left">
                        <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                        <span className="progress-bar"></span>
                    </span>
                    <div className="progress-value font-bold">50%</div>
                    <div className="language mt-40 justify-center text-center font-bold text-xl">JAVASCRIPT</div>
                </div>

                <div className="progress fourth  ">
                    <span className="progress-left">
                        <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                        <span className="progress-bar "></span>
                    </span>
                    <div className="progress-value font-bold">50%</div>
                    <div className="language mt-40 justify-center text-center font-bold text-xl">REACT.JS</div>
                </div>

                <div className="progress fifth  ">
                    <span className="progress-left">
                        <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                        <span className="progress-bar "></span>
                    </span>
                    <div className="progress-value font-bold">75%</div>
                    <div className="language mt-40 justify-center text-center font-bold text-xl">C++</div>
                </div>

                <div className="progress sixth  ">
                    <span className="progress-left">
                        <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                        <span className="progress-bar "></span>
                    </span>
                    <div className="progress-value font-bold">70%</div>
                    <div className="language mt-40 justify-center text-center font-bold text-xl">PYTHON</div>
                </div>

                

                
            </div>
            
        </>
    )
}

export default Skills
