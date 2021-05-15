import React, { useState } from "react";
import './Slider.css';
import 'react-input-range/lib/css/index.css';

//destructure props from pricingModule
const SliderComponent = ({ onChange, defaultPrice }) => {

    return (
        <div>
            <div className="slider-container" >
                <input
                    className='slider'
                    type="range"
                    list='prices'
                    min={9.99}
                    max={99.99}
                    step={10}
                    onChange={onChange}
                    defaultValue={defaultPrice}
                />
            </div >
        </div>
    )
}

export default SliderComponent
