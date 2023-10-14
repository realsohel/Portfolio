import React, { useEffect, useState } from 'react';

const CircularBar = (props) => {
    const [progressValue, setProgressValue] = useState(0);

    const progressing = () => {
        let progressEndValue = props.value;
        let speed = 100;
        let step = (props.value - progressValue) / (100 / (speed / 2));

        let progress = setInterval(() => {
        setProgressValue((prevValue) => {
            let newValue = prevValue + step;
            if (newValue >= progressEndValue) {
            clearInterval(progress);
            return progressEndValue;
            }
            return newValue;
        });
        }, speed);
    };

    useEffect(() => {
    progressing();
    }, []);

    return (
        <div className="lg:mt-2 container mr-0 sm:mx-12 md:mx-6 lg:mx-0 lg:ml-12 lg:mr-20 lg:mb-20 mb-8 items-center grid transform translate-x-[-1/2] translate-y-[-1/2]">
        <div
            className="circular-progress-bar"
            style={{
            background: `conic-gradient(
                #05F2F2 ${progressValue * 3.6}deg,
                rgb(212, 212, 212) ${progressValue * 3.6}deg )`,
            }}
        >
            <div className="value-con relative text-2xl font-bold">{`${Math.round(
            progressValue
            )}%`}</div>
        </div>
        <div className="mt-4 text-center w-[55%] font-bold text-xl ">{props.name}</div>
        </div>
    );
};

export default CircularBar;
