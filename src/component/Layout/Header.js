import React from 'react'
import Meals from '../../assets/images/meals.jpg'
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import Profile from './Dropdown';
const Header = (props) => {
  return <>
    <header className={classes.header}>
      <h1>Your Meals</h1>
      <div className='d-flex'>
        <HeaderCartButton onClick={props.onShowCart} fetchOrders={props.fetchOrders} />
        <Profile />
      </div>

    </header>
    <div>
      <img src={Meals} alt="meals" className={classes['main-image']} />
    </div>
  </>
}
export default Header;