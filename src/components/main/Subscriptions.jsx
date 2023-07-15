import React, { useState } from 'react'
import { RiCheckLine } from 'react-icons/ri'
import { AiOutlineFieldTime } from 'react-icons/ai'

const Subscriptions = () => {


    const [selectedSubscription, setSelectedSubscription] = useState(null);

    const handleSubscriptionChange = (event) => {
        setSelectedSubscription(event.target.value);
    };

    console.log(selectedSubscription)

    const Data = [
        {
            id: 1,
            timeperiod: 12,
            total: 179,
            monthly: 15,
            label: "Expired"
        },
        {
            id: 2,
            timeperiod: 12,
            total: 179,
            monthly: 15,
            label: "Recommended",
            basePrice: 18500
        },
        {
            id: 3,
            timeperiod: 6,
            total: 149,
            monthly: 25,
            basePrice: 9250

        },
        {
            id: 4,
            timeperiod: 3,
            total: 99,
            monthly: 33,
            basePrice: 4625
        },
    ]

    // let basePrice = 100;

    const selectedSubscriptionData = Data.find(item => item.id == selectedSubscription);

    // const subscriptionFee = selectedSubscriptionData ? basePrice * (selectedSubscriptionData.timeperiod - 1) : 0;
    const subscriptionFee = selectedSubscriptionData ? selectedSubscriptionData?.basePrice : 0
    const limitedOffer = selectedSubscriptionData ? selectedSubscriptionData?.basePrice - selectedSubscriptionData?.total : 0

    console.log(subscriptionFee, limitedOffer)
    const total = (subscriptionFee - limitedOffer)


    console.log(selectedSubscriptionData)
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

            <div className="radio-button-container">

                {Data.map((item) => (
                    <label
                        className={`radio-button ${item.label === "Expired" ? "expired" : item.label === "Recommended" ? "recommend" : " "}  ${item.id == selectedSubscription ? 'selected' : ''}`}
                        key={item.id}
                    >
                        <input
                            type="radio"
                            name="subscription"
                            value={item.id}
                            checked={selectedSubscription == item.id}
                            onChange={handleSubscriptionChange}
                            disabled={item.label === "Expired"}
                        />
                        <span className="checkmark">
                            <RiCheckLine />
                        </span>
                        <div className="subscription-info">
                            <div className="subscription-text">{item.timeperiod} Months Subscription</div>
                            <div className="subscription-price">
                                <div>
                                    Total <b className="total-price">₹{item.total}</b>
                                </div>
                                <div className="monthly-price">₹{item.monthly}/mo</div>
                            </div>
                        </div>
                    </label>
                ))}

            </div>

            <div className="total-subcription-container">
                <div style={{ paddingTop: "12px" }} className='subsfee-container'>
                    <div>Subscription Fee</div>
                    <b>₹{subscriptionFee}</b>
                </div>
                <div className="limt-time-offer">
                    <div className='subsfee-container'>
                        <div style={{ color: "red" }}>Limited Time Offer</div>
                        <b>-₹{limitedOffer}</b>
                    </div>
                    <div style={{ color: "red", backgroundColor: "" }} className='isvalid-text'><span style={{ color: "red", fontSize: "20px" }}>
                        <AiOutlineFieldTime />
                    </span>Offer valid till 25th March 2023 </div>
                </div>
                <div className='subsfee-container'>
                    <div>Total (Incl. of 18% GST)</div>
                    <b>₹ {total}</b>
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