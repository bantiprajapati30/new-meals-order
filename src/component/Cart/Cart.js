import React, { useContext, useState } from 'react'
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';
import Spinner from "../UI/Spinner";
const Cart = (props) => {
  const [isCheckout, setisCheckout] = useState(false);
  const [submittingData, setSubmittingData] = useState(false);
  const [didSubmitted, setDidSubmitted] = useState(false);
  const [errorDiv, setErrorDiv] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const orderHandler = () => {
    setisCheckout(true);
  };
  const submitOrderHandler = async (userData) => {
    setSubmittingData(true);
    let current = new Date();
    const timeDates = {
      date: current.toLocaleDateString(),
      time: current.toLocaleTimeString()
    }
    await fetch(
      "https://food-meals-db217-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
          dateTime: timeDates
        }),
      }
    )
      .then((res) => {
        if (res.status >= 400) {
          setDidSubmitted(false);
          setErrorDiv(true);
        }
        return res.json();
      })
      .then((err) => {
        setErrorMsg(err.error);
        console.log(err);
      });
    setSubmittingData(false);
    setDidSubmitted(true);
    cartCtx.clearCart();
  };
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const cartModalContent = (
    <React.Fragment>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onHideCart} />
      )}
      {!isCheckout && (
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onHideCart}>
            Close
          </button>
          {hasItem && (
            <button className={classes.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </React.Fragment>
  );
  const successfullyDataModal = (
    <React.Fragment>
      <div className={classes.submiteData}>
        <p>{errorDiv ? errorMsg : "Successfully sent the order!"}</p>
        <div className={classes.actions}>
          <button className={classes.button} onClick={props.onHideCart}>
            Close
          </button>
        </div>
      </div>
    </React.Fragment>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {submittingData ? (
        <Spinner customClass={"center"} />
      ) : (
        !didSubmitted && !errorDiv && cartModalContent
      )}
      {didSubmitted && successfullyDataModal}
    </Modal>
  );
};

export default Cart
