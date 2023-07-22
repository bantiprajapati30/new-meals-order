

import React from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart'
import Header from '../Layout/Header';
import Meals from '../Meals/Meals'
import CartProvider from '../../store/CartProvider';
function Dashboard(props) {
    const [isShowCart, setIsShowCart] = useState(false);
    const [isShowOrders, setIsShowOrders] = useState(false);

    const onShowHandler = () => {
        setIsShowCart(true);
    }
    const onHideHandler = () => {
        setIsShowCart(false);
    }
    const showOrders = () => {
        setIsShowOrders(true)
    }
    const hideOrders = () => {
        setIsShowOrders(false)
    }
    return (
        <CartProvider>
            {isShowCart && <Cart onHideCart={onHideHandler} />}
            <Header onShowCart={onShowHandler} fetchOrders={showOrders} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default Dashboard;