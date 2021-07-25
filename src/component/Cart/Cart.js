import React from 'react'
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
const Cart = (props) => {
    const cartItem=[{id:1, name: 'sussy', price: 20}]
    let resultItem= <ul className={classes['cart-items']}>{cartItem.map(item=> <li>{item.name} {item.price}</li>)}</ul>
    return (
        <Modal onHideCart={props.onHideCart}>
            {resultItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart
