import React, { useContext, useState } from 'react'
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';
const Cart = (props) => {
    const [isCheckout, setisCheckout] = useState(false)
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItem = cartCtx.items.length > 0;
    const cartItemRemoveHandler=(id)=>{
        cartCtx.removeItem(id);
    }
    const cartItemAddHandler=(item)=> {
        cartCtx.addItem({...item, amount:1})
    }
    const orderHandler =()=> {
       setisCheckout(true)
    }
    const CartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem 
                key={item.id} 
                name={item.name} 
                amount={item.amount} 
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)} />
            ))}
        </ul>
    )
    return (
        <Modal onHideCart={props.onHideCart}>
            {CartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onCancel ={props.onHideCart} />} 
           {!isCheckout && <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                 {hasItem &&<button className={classes.button} onClick={orderHandler}>Order</button>}
            </div>
           } 
        </Modal>
    )
}

export default Cart
