import React from 'react'
import Meals from '../../assets/images/meals.jpg'
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header=(props)=> {
  return <>
  <header className={classes.header}>
      <h1>Your Meals</h1>
     <HeaderCartButton  onClick={props.onShowCart}/>
  </header>
  
  <div>
      <img src={Meals} alt="meals" className={classes['main-image']} />
  </div>
  </>
}
export default Header;