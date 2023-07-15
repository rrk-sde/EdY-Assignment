import React, { useState } from 'react'
import { RiCheckLine } from 'react-icons/ri'
import { AiOutlineFieldTime } from 'react-icons/ai'

const Subscriptions = () => {


    const [selectedSubscription, setSelectedSubscription] = useState(null);

    const handleSubscriptionChange = (event) => {
        setSelectedSubscription(event.target.value);
    };

    console.log(selectedSubscription)

    return (
        <div className='subscription-container'>
            <div className="btn-with-text-container">
                <div className='btn-with-text-item'>
                    <div className="circle-button">1</div>
                    <p>Sign Up</p>
                </div>
                <div className='btn-with-text-item'>
                    <div className="circle-button">2</div>
                    <p>Subscribe</p>
                </div>
            </div>
            <h1 style={{ textAlign: "center", fontSize: "20px" }}>Select your subcription plan</h1>
            {/* <div className="subscriptions-lists">

            </div> */}

            <div className="radio-button-container">
                <label className={`radio-button expired disabled ${selectedSubscription === 'subscription0' ? 'selected' : ''}`}>
                    <input
                        type="radio"
                        disabled={true}
                        name="subscription"
                        value="subscription0"
                        checked={selectedSubscription === 'subscription0'}
                        onChange={handleSubscriptionChange}
                    />
                    <span className="checkmark"><RiCheckLine /></span>
                    <div className="subscription-info">
                        <div className="">12 Months Subscription</div>
                        <div className="subscription-price">
                            <div>
                                Total <span className="total-price">₹179</span>
                            </div>
                            <div className="monthly-price">₹15/mo</div>
                        </div>
                    </div>
                </label>
                <label className={`radio-button recommend ${selectedSubscription === 'subscription1' ? 'selected' : ''}`}>
                    <input
                        type="radio"
                        name="subscription"
                        value="subscription1"
                        checked={selectedSubscription === 'subscription1'}
                        onChange={handleSubscriptionChange}
                    />
                    <span className="checkmark"><RiCheckLine /></span>
                    <div className="subscription-info">
                        <div className="subscription-text">12 Months Subscription</div>
                        <div className="subscription-price">
                            <div>
                                Total <span className="total-price">₹179</span>
                            </div>
                            <div className="monthly-price">₹15/mo</div>
                        </div>
                    </div>
                </label>
                <label className={`radio-button ${selectedSubscription === 'subscription2' ? 'selected' : ''}`}>
                    <input
                        type="radio"
                        name="subscription"
                        value="subscription2"
                        checked={selectedSubscription === 'subscription2'}
                        onChange={handleSubscriptionChange}
                    />
                    <span className="checkmark"><RiCheckLine /></span>
                    <div className="subscription-info">
                        <div className="subscription-text">6 Months Subscription</div>
                        <div className="subscription-price">
                            <div>
                                Total <span className="total-price">₹179</span>
                            </div>
                            <div className="monthly-price">₹25/mo</div>
                        </div>
                    </div>
                </label>
                <label className={`radio-button ${selectedSubscription === 'subscription3' ? 'selected' : ''}`}>
                    <input
                        type="radio"
                        name="subscription"
                        value="subscription3"
                        checked={selectedSubscription === 'subscription3'}
                        onChange={handleSubscriptionChange}
                    />
                    <span className="checkmark"><RiCheckLine /></span>
                    <div className="subscription-info">
                        <div className="subscription-text">3 Months Subscription</div>
                        <div className="subscription-price">
                            <div>
                                Total <span className="total-price">₹179</span>
                            </div>
                            <div className="monthly-price">₹33/mo</div>
                        </div>
                    </div>
                </label>
            </div>

            <div className="total-subcription-container">
                <div style={{ paddingTop: "12px" }} className='subsfee-container'>
                    <div>Subscription Fee</div>
                    <div>₹18,500</div>
                </div>
                <div className="limt-time-offer">
                    <div className='subsfee-container'>
                        <div>Subscription Fee</div>
                        <div>₹18,500</div>
                    </div>
                    <div className='isvalid-text'><span style={{ color: "red", fontSize: "30px" }}><AiOutlineFieldTime /></span>Offer valid till 25th March 2023 </div>
                </div>
                <div className='subsfee-container'>
                    <div>Total (Incl. of 18% GST)</div>
                    <div>₹149</div>
                </div>
            </div>

            <div className="btn-cancelpay">
                <button className='btn cancel'>cancel</button>
                <button className='btn pay'>proceed to pay</button>
            </div>
        </div>
    )
}

export default Subscriptions