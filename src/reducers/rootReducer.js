
import { combineReducers } from "redux";
import meals from "./meals";
import orders from './order'
const rootReducer = combineReducers({
    meals,
    orders
})
export default rootReducer