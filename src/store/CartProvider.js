import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cardReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item)
        const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
        console.log(action.item.price);
        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
    }
    return defaultCartState;
}

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cardReducer, defaultCartState)

    const addToCartHandler = item => {
        dispatchCartAction({ type: 'ADD', item: item })
    }

    const removeItemFromhandler = id => {
        dispatchCartAction({type: 'REMOVE', id:id})
     }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addToCartHandler,
        removeItem: removeItemFromhandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider;