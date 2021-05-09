import React, { useState } from "react";


import './Slider.css';
import 'react-input-range/lib/css/index.css';

//destructure props from Pricingmodule
const SliderComponent = ({ onChange, defaultPrice }) => {

    return (
        <div>
            <div className="slider-container" >
                <input
                    className='slider'
                    type="range"
                    min={10}
                    max={30}
                    step={10}
                    onChange={onChange}
                    defaultValue={defaultPrice}
                />
            </div >
        </div>
    )
}

export default SliderComponent
