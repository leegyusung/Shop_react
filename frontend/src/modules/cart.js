import { createAction, handleActions } from "redux-actions";
import * as cartAPI from '../lib/api/cart';
import produce from 'immer'

const INITFORM = 'cart/INITFORM';

const CHANGE_FIELD_AMOUNT = 'cart/CHANGE_FIELD_AMOUNT';
const CHANGE_FIELD_SUM = 'cart/CHANGE_FIELD_SUM';

const CARTS_GET = 'cart/CARTS_GET'
const CARTS_SUCCESS = 'cart/CARTS_SUCCESS'
const CARTS_FAILURE = 'cart/CARTS_FAILURE'

const CART_REGISTER = 'cart/CART_REGISTER'
const CART_SUCCESS = 'cart/CART_SUCCESS';
const CART_FAILURE = 'cart/CART_FAILURE'

export const initForm = createAction(INITFORM);
export const changeCartAmount = createAction(CHANGE_FIELD_AMOUNT, data => data)
export const changeCartSum = createAction(CHANGE_FIELD_SUM, data => data)

export const getCarts = ({ username }) => async dispatch => {
    dispatch({
        type: CARTS_GET
    })
    try {
        const carts = await cartAPI.getCart({ username });
        dispatch({
            type: CARTS_SUCCESS,
            payload: carts.data
        })
    } catch (error) {
        dispatch({
            type: CARTS_FAILURE,
            payload: error,
            error: true
        })
        throw error
    }
}
export const registerCart = ({ cartAmount, cartSum, product, user }) => async dispatch => {
    dispatch({
        type: CART_REGISTER
    })
    try {
        const cart = await cartAPI.registerCart({ cartAmount, cartSum, product, user })
        dispatch({
            type: CART_SUCCESS,
            payload: cart.data
        })
    } catch (error) {
        dispatch({
            type: CART_FAILURE,
            payload: error,
            error: true
        })
        throw error
    }
}

const initialState = {
    cart: {
        cartAmount: 1,
        cartSum: 0,
        product: null,
        user: null
    },
    loading: false,
    cartSuccess: null,
    carts: null,
    cartError: null
}

const cart = handleActions({
    [INITFORM]: (State, action) => initialState,
    [CHANGE_FIELD_AMOUNT]: (state, action) => produce(state, draft => {
        draft.cart.cartAmount = action.payload
    }),
    [CHANGE_FIELD_SUM]: (state, action) => produce(state, draft => {
        draft.cart.cartSum = action.payload
    }),
    [CARTS_GET]: (state, action) => produce(state, draft => {
        draft.loading = true;
    }),
    [CARTS_SUCCESS]: (state, action) => produce(state, draft => {
        draft.loading = false;
        draft.carts = action.payload
    }),
    [CARTS_FAILURE]: (state, action) => produce(state, draft => {
        draft.loading = false;
        draft.cartError = action.payload
    }),
    [CART_REGISTER]: (state, action) => produce(state, draft => {
        draft.loading = true;
    }),
    [CART_SUCCESS]: (state, action) => produce(state, draft => {
        draft.loading = false;
        draft.cartSuccess = action.payload
    }),
    [CART_FAILURE]: (state, action) => produce(state, draft => {
        draft.loading = false;
        draft.cartError = action.payload
    })

}, initialState)

export default cart;