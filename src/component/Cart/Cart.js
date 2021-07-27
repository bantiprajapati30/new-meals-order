import React, { useContext } from 'react'
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {

    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    let resultItem = <ul className={classes['cart-items']}>{cartCtx.items.map((item, index) => <li key={index}>{item.name} <span className={classes["price-left"]}>{item.price}</span></li>)}</ul>
    return (
        <Modal onHideCart={props.onHideCart}>
            {resultItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart
