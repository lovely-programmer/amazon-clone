import React from 'react'
import './Home.css'
import lean from './lean.jpg'
import watch from './images/watch.jpg'
import game from './images/call_of_duty.jpg'
import Iphone12 from './images/apple-iphone-12-pro--.jpg'
import shoe from './images/New men snneaker.jpg'
import phoneWatch from './images/smart watch water proof.jpg'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home_container">
                <div className='home_image'> 
                </div>

            <div className="home_row">
                 <Product id={1} title="The lean Startup: How Constant Innovation Creates Radially Successful Business Paperback " image={lean} rating={5} price={19} />
                 <Product id={2} title="Experience real game" image={game} rating={3} price={25.99} />
            </div>
            <div className="home_row">
                <Product id={3} title="Nice watch for outing " image={watch} rating={5} price={40} />
                <Product id={4} title="Quality shoe for both men and women" image={shoe} rating={4} price={69.99} />
                <Product id={5} title="Iphone watch" image={phoneWatch} rating={3} price={55} />
                 
            </div>
            <div className="home_row">
                <Product id={6} title="Iphone 12 at an amazing amount" image={Iphone12} rating={5} price={70} />
            </div>

            </div>

        </div>
    )
}

export default Home
