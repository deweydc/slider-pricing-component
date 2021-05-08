import React from 'react';
import Switch from '@material-ui/core/Switch';
import CheckIcon from '@material-ui/icons/Check';
import './PricingModule.css';

const PricingModule = () => {


    return (
        <div className='container'>
            <div className="header">
                <span className="page-views">100k pageviews</span>
                <span className="price">$16.00</span>
                <span className="pricing"> / month</span>
            </div>

            <div className="slider-container">
                {/* slider */}
                <input type="range" className='slider' />
            </div>

            <div className="duration">
                <span>Monthly Billing</span>
                <Switch
                    defaultChecked
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                />
                <span>Yearly Billing</span>
                <span className="discount">25% discount</span>
            </div>

            <div className="trial">
                <div className="left">
                    <CheckIcon className='checkmark' style={{ fontSize: 20 }} />
                    <span>Unlimited websites</span> <br />
                    <CheckIcon className='checkmark' style={{ fontSize: 20 }} />
                    <span>100% data ownership</span> <br />
                    <CheckIcon className='checkmark' style={{ fontSize: 20 }} />
                    <span>Email reports</span>
                </div>
                <div className="right">
                    <button>Start my trial</button>
                </div>

            </div>



        </div >
    )
}

export default PricingModule