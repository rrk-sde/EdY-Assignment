import React from 'react'
import icon1 from '../../assets/Icon1.svg'
import icon2 from '../../assets/Icon2.svg'
import icon3 from '../../assets/Icon3.svg'
import icon4 from '../../assets/Icon4.svg'
import liveIcon from '../../assets/Icon.svg'

const Content = () => {
    return (
        <div className='content-container'>
            <div className='content-heading'>
                <h1>Access curated courses worth</h1>
                <h1>₹ 18,500
                    at just
                    ₹ 99
                    per year!</h1>

            </div>

            <ul className='list-item-container'>
                <li className='list-item'><span><img width={68} src={icon1} alt="" srcset="" /></span>100+ Job relevant courses </li>
                <li className='list-item'><span><img width={68} src={icon3} alt="" srcset="" /></span>20,000+ Hours of content </li>
                <li className='list-item'><span><img width={68} src={liveIcon} alt="" srcset="" /></span>Exclusive webinar access </li>
                <li className='list-item'><span><img width={68} src={icon2} alt="" srcset="" /></span>Scholarship worth ₹94,500 </li>
                <li className='list-item'><span><img width={68} src={icon4} alt="" srcset="" /></span>Ad Free learning experience</li>
            </ul>
        </div>
    )
}

export default Content