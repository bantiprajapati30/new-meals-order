import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const nuberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        console.log(curNumber+item);
        return curNumber + item.amount
       
    }, 0)



    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>
            Cart
        </span>
        <span className={classes.badge}>{nuberOfCartItems}</span>
    </button>
}
export default HeaderCartButton