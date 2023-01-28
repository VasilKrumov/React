import React from 'react'
import classes from './Cart.module.css'

export const Cart = () => {
    const cartItems = (
        <ul className={classes['cart-items']}>
            {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    )
    return (
        <>
            {cartItems}
            <div classname={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div classname={classes.actions}>
                <button classname={classes['button--alt']}>Close</button>
                <button classname={classes.button}>Order</button>
            </div>
        </>
    )
}
