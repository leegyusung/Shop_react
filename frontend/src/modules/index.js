import { combineReducers } from "redux";
import auth from './auth';
import user from "./user";
import product from "./product";
import cart from './cart'
import comment from "./comment";
import purchase from './purchase'
import reply from './reply';

const rootReducer = combineReducers({
    auth,
    user,
    product,
    cart,
    comment,
    reply,
    purchase
})
export default rootReducer