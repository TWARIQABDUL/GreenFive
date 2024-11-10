import React, { useState } from 'react';
import Navbar from './navbar';
import Performance from './performance';

function Control() {
    const [sliderValue, setSliderValue] = useState(50);
    const [isOn,setOn] = useState(false)
    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    };

    // Calculate background color from white to green based on slider value
    const sliderBackground = `linear-gradient(90deg, green ${sliderValue}%, white ${sliderValue}%)`;
    const handleClick = ()=>{
        setOn(!isOn)
    }
    return (
        <div className="container">
            <Navbar />
            <div className="big-button" >
                <div className="btn-main" style={isOn? {background:'#006600'}: {background:'red'}}>
                    <div className="white-ofsset">
                        <button onClick={handleClick}>{isOn? 'OFF' : 'ON'}</button>
                        {/* <h1 onClick={console.log("hello")}>ON</h1> */}
                    </div>
                </div>
            </div>

            <div className="slide-control">
                <input
                    type="range"
                    min="1"
                    max="100"
                    value={sliderValue}
                    className="slider"
                    id="myRange"
                    onChange={handleSliderChange}
                    style={{ background: sliderBackground }}
                />
            </div>

            <Performance />
        </div>

    );
}

export default Control;
