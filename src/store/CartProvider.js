import CartContext from "./cart-context";

const CartProvider=props=>{

    const addToCartHandler=props={}

    const removeItemFromhandler=props={}

    const cartContext ={
        item:[],
        amount:0,
        addItem: addToCartHandler,
        removeItem: removeItemFromhandler 
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider;