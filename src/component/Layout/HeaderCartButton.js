import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useContext, useEffect, useState  } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
    const [buttonIsHighlight, setButtonIsHighlight]=useState(false)
    const cartCtx = useContext(CartContext);
    const  {items}= cartCtx;
    const nuberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount 
    }, 0)
  
    const buttonClass= `${classes.button} ${buttonIsHighlight ? classes.bump : ""}`
  
    useEffect(()=> {
        if(items.length=== 0) {
            return;
        }
        setButtonIsHighlight(true)
        const timer= setTimeout(()=> {
       setButtonIsHighlight(false)
        }, 300)
        return ()=> {
            clearTimeout(timer)
        }
    }, [items])

    return <button className={buttonClass} onClick={props.onClick}>
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