

import {
    FETCH_DATA_REQUEST,
    MEAL_LIST_SUCCESS,
    API_FAILURE,
} from '../constant';

const initialState = {
    data: null,
    isLoading: false,
    error: null,
};
function meals(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case MEAL_LIST_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: null
            }
        case API_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.data
            }

        default:
            return state
    }
}

export default meals;