import classes from './Checkout.module.css';
import React, { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === ""; //this is the helper function which is declare always outside of the component

const CharIsSix = (value) => value.length === 6;

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const NameIsValid = !isEmpty(enteredName);
    const StreetIsValid = !isEmpty(enteredStreet);
    const postalIsValid = CharIsSix(enteredPostal);
    const cityIsValid = !isEmpty(enteredCity);

    setFormValidity({
      name: NameIsValid,
      street: StreetIsValid,
      postal: postalIsValid,
      city: cityIsValid,
    });

    const formIsvalid =
      NameIsValid && StreetIsValid && postalIsValid && cityIsValid;

    if (!formIsvalid) {
      return;
    }
    props.onConfirm({
      name:enteredName,
      street:enteredStreet,
      postal:enteredPostal,
      city:enteredCity
    })
  };
  const nameClasses = `${classes.control} ${formValidity.name ? '': classes.invalid}`;
  const streetClasses = `${classes.control} ${formValidity.street ? '': classes.invalid}`;
  const postalClasses = `${classes.control} ${formValidity.postal ? '': classes.invalid}`;
  const cityClasses = `${classes.control} ${formValidity.city ? '': classes.invalid}`;
  return (
    <>
      <form className={classes.form} onSubmit={confirmHandler}>
        <div className={nameClasses}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" ref={nameInputRef} />
          {!formValidity.name && <p>Please enter the name</p>}
        </div>
        <div className={streetClasses}>
          <label htmlFor="street">Street</label>
          <input type="text" id="street" ref={streetInputRef} />
          {!formValidity.street && <p>Please enter the Stree</p>}
        </div>
        <div className={postalClasses}>
          <label htmlFor="postal">Postal Code</label>
          <input type="number" id="postal" ref={postalInputRef} />
          {!formValidity.postal && <p>Postal code should be 6 number</p>}
        </div>
        <div className={cityClasses}>
          <label htmlFor="city">City</label>
          <input type="text" id="city" ref={cityInputRef} />
          {!formValidity.city && <p>Please enter the name</p>}
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button onClick={confirmHandler}>Confirm</button>
        </div>
      </form>
    </>
  );
};
export default Checkout;