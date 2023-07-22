import React, { useEffect, useRef, useState } from 'react';
import classes from '../Layout/Header.module.css';
import Profile from '../Layout/Dropdown';
import OrderList from './OrderList';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderList } from '../../actions/action';
import Spinner from '../UI/Spinner';
function Order(props) {
    const [orderData, setOrderData] = useState([])

    const abortController = useRef(new AbortController()).current;

    const data = useSelector(state => state.orders)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrderList(abortController));
        return () => {
            abortController.abort();
        };
    }, [dispatch, abortController]);
    useEffect(() => {
        let finalData = []
        let responseData = data.data
        for (let key in responseData) {
            finalData.push({
                id: key,
                userData: responseData[key].user,
                orderItems: responseData[key].orderedItems,
                timeDates: responseData[key].dateTime
            })
        }
        setOrderData(finalData);
    }, [data])
    return (<>
        <div className={`${classes.header}`}>
            <h1>Orders</h1>
            <Profile />
        </div>
        <div className={data.isLoading ? 'mt-5 pt-5' : ''} >
            {data.isLoading ? <Spinner customClass={"center"} /> : <OrderList orders={orderData} />}
        </div >

    </>

    );
}

export default Order;