import React, { useState } from 'react';
import SliderComponent from './Slider';
import Switch from '@material-ui/core/Switch';
import CheckIcon from '@material-ui/icons/Check';
import './PricingModule.css';

const PricingModule = () => {

    //setting state for Price
    const [price, setPrice] = useState(39.99);
    //setting duration of subscription 
    const [monthly, setMonthly] = useState(true);

    const handleToggle = () => {
        monthly ? setMonthly(false) : setMonthly(true)
    }

    //setting logic fo var for yearly price
    let yearlyPrice = Math.round(price * 12 - (price * 12 * 0.25)) - .01.toFixed(2)

    let savings = Math.round(price * 12 * .25)


    return (
        <div className='container'>
            <div className="header">
                <span className="page-views">100k pageviews</span>

                <div className="header__right">
                    {!monthly ? <span className="price">${price}</span> : <span className="price">${yearlyPrice}</span>}
                    {!monthly ? <span className="pricing">/ monthly</span> : <span className="pricing">/ yearly</span>}
                </div>

            </div>
            {
                monthly ?
                    <h3 className="savings">${savings} Savings</h3> :
                    <div style={{ padding: 11 }} ></div>
            }

            <SliderComponent
                defaultPrice={39.99}
                onChange={e => setPrice(e.target.value)}
                price={price}
            />

            <div className="duration">
                <span>Monthly Billing</span>
                <Switch
                    checked={monthly}
                    onClick={handleToggle}

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
