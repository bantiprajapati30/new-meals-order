
import axios from 'axios'
import { FETCH_DATA_REQUEST, MEAL_LIST_SUCCESS, API_FAILURE, ORDER_LIST_SUCCESS } from '../constant'


const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST,
})

const fetchListSuccess = (data, type) => ({
    type: type,
    payload: data
})
const apiFailure = (error) => ({
    type: API_FAILURE,
    payload: error
})


export const getMealsList = (callback) => {
    return async (dispatch) => {
        try {
            dispatch(fetchDataRequest());

            const response = await axios.get('https://food-meals-db217-default-rtdb.firebaseio.com/meals.json');
            const data = response.data;

            dispatch(fetchListSuccess(data, MEAL_LIST_SUCCESS));
        } catch (error) {
            dispatch(apiFailure(error));
        }
    };
};

export const getOrderList = (abortController, callback) => {
    return async (dispatch) => {
        try {
            dispatch(fetchDataRequest());
            const response = await axios.get('https://food-meals-db217-default-rtdb.firebaseio.com/orders.json', { signal: abortController.signal });
            const data = response.data;
            dispatch(fetchListSuccess(data, ORDER_LIST_SUCCESS));
            callback(data);
        } catch (error) {
            dispatch(apiFailure(error));
        }
    };
};