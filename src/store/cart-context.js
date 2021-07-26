import React from 'react';

const CartContext = React.createContext({
    item: [],
    amount: 0,
    addItem: () => { },
    removeItem: () => {  }
})
export default CartContext;