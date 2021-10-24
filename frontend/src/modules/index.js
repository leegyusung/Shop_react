import { combineReducers } from "redux";
import auth from './auth';
import user from "./user";
import product from "./product";
import cart from './cart'

const rootReducer = combineReducers({
    auth,
    user,
    product,
    cart
})
export default rootReducer