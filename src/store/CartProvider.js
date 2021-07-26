import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState={
    item:[],
    totalAmmount:0
}
const cardReducer=(state, action)=> {
    if(action.type==='ADD') {
        const updateditem=state.items.concat(action.item)
        const updatedAmount=state.totalAmmount+action.item.price*action.item.price;
        return {
            items: updateditem,
            totalAmmount: updatedAmount
        }
    }
  return defaultCartState;
}

const CartProvider=props=>{

    const [cartState, dispatchCartAction]=useReducer(cardReducer, defaultCartState)

    const addToCartHandler=item=>{
        dispatchCartAction({type:'ADD', item:item})
    }

    const removeItemFromhandler=id=>{}

    const cartContext ={
        items:cartState.item,
        amount:cartState.totalAmmount,
        addItem: addToCartHandler,
        removeItem: removeItemFromhandler 
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider;