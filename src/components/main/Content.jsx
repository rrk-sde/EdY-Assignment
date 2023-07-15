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
                <h1>
                    ₹ <span class="strikethrough-text">18,500 </span>
                    at just
                    <span class="list-item-textblue"> ₹ 99 </span>
                    per year!
                </h1>

            </div>

            <ul className='list-item-container'>

                <li className='list-item'>
                    <div><img width={40} src={icon1} alt="" srcset="" /></div>
                    <div><span className='list-item-textblue'>100+</span> Job relevant courses </div>
                </li>
                <li className='list-item'>
                    <div><img width={40} src={icon3} alt="" srcset="" /></div>
                    <div><span className='list-item-textblue'>20,000+</span> Hours of content </div>
                </li>
                <li className='list-item'>
                    <div><img width={40} src={liveIcon} alt="" srcset="" /></div>
                    <div><span className='list-item-textblue'>Exclusive</span>  webinar access </div>
                </li>
                <li className='list-item'>
                    <div><img width={40} src={icon2} alt="" srcset="" /></div>
                    <div>Scholarship worth <span className='list-item-textblue'>₹94,500</span> </div>
                </li>
                <li className='list-item'>
                    <div><img width={40} src={icon4} alt="" srcset="" /></div>
                    <div><span className='list-item-textblue'>Ad Free</span> learning experience </div>
                </li>

            </ul>
        </div>
    )
}

export default Content