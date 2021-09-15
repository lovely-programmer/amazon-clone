import React, { useState } from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import amazonAd from './images/Amazon_ad.jpg'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    let [{basket,user}] = useStateValue()
    const [cart,setCart] = useState(basket)

    React.useEffect(()=>{
        localStorage.setItem("addItem", JSON.stringify(cart))
    })

    React.useEffect(()=>{
        const data = localStorage.getItem('addItem')
        data && setCart(JSON.parse(data))
    },[])



    return (
        <div className="checkout">
            <div className="checkout_left">

                <img className="checkout_ad" src={amazonAd} alt="" />

                <div className="checkout_title">
                    <h3>Hello, {user?.email}</h3>
                    Your shopping Basket
                </div>

                {basket.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        rating = {item.rating}
                    />
                ))}

            </div>

            <div className="checkout_right">
                <Subtotal/>
            </div>
            
        </div>
    )
}

export default Checkout
