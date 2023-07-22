import React, { useState } from 'react';
import classes from './OrderList.module.css';
import DeleteIcon from '../../assets/images/delete-icon.svg'
import Spinner from '../UI/Spinner';
const OrderList = ({ orders, propLoader }) => {
    const [loader, setLoader] = useState(propLoader)
    const handleDeleteOrder = async (orderId) => {

        // Handle delete order functionality here
        setLoader(true)
        try {
            await fetch(`https://food-meals-db217-default-rtdb.firebaseio.com/orders/${orderId}.json`, {
                method: 'DELETE'
            });
            console.log('Order deleted successfully');
            setLoader(false)
        } catch (error) {
            console.error('Error deleting order:', error);
            setLoader(false)
        }
    };
    return (
        <div className={classes.orderhistory}>
            {loader ? <Spinner customClass={"center"} /> :
                <>
                    <h1 className={classes.title}>Order History</h1>
                    {orders.length === 0 && <h3>No History Found</h3>}
                    {orders.map((order) => (
                        <div className={classes.ordercard} key={order.id}>
                            <div className={classes.orderdetails}>
                                <h2 className={classes.orderid}>Order ID: {order.id}</h2>
                                <p className={classes.orderdate}>{order.timeDates.date} {order.timeDates.time}</p>
                                <button
                                    className={classes.deletebutton}
                                    onClick={() => handleDeleteOrder(order.id)}

                                ><img src={DeleteIcon} width={"16px"} />
                                </button>
                            </div>
                            <div className={classes.userdetails}>
                                <p className={classes.customername}>{order.userData.name}</p>
                                <p className={classes.customeraddress}>{order.userData.street}</p>
                                <p className={classes.customeraddress}>{order.userData.city}, {order.userData.postal}</p>
                            </div>
                            <div className={classes.orderitems}>
                                <h3 className={classes.subtitle}>Order Items:</h3>
                                <ul className={classes.itemlist}>
                                    {order.orderItems.map((item) => (
                                        <li className={classes.item} key={item.id}>
                                            <p className={classes.itemname}>{item.name}</p>
                                            <p className={classes.itemquantity}>Quantity: {item.amount}</p>
                                            <p className={classes.itemprice}>Price: ${item.price}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </>}

        </div>
    );
};

export default OrderList;
