import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
// import Cart from '../Cart/Cart';
const HeaderCartButton =(props)=> {
    return <button className={classes.button}>
        <span className={classes.icon}>
         <CartIcon/>
        </span>
        <span>
            Cart
           
        </span>
        <span className={classes.badge}>3</span>
    </button>
}
export default HeaderCartButton