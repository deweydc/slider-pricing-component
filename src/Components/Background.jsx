import React from 'react';
import './Background.css'


const Background = () => {
    return (
        <div className='background'>
            <img className='bg-image' src={require('../Shared/images/pattern-circles.svg').default} alt="bg-art" />
            <div className="title">
                <h1>Simple, Traffic-based pricing</h1>
                <p>Sign-up for our 30-day trial. No credit card required.</p>
            </div>
        </div>
    )
}

export default Background
