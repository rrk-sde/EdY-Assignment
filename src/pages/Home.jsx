import React from 'react'
import Content from '../components/main/Content'
import Subscriptions from '../components/main/Subscriptions'

const Home = () => {
    return (
        <div className='home-container'>
            <Content />
            <Subscriptions />
        </div>
    )
}

export default Home