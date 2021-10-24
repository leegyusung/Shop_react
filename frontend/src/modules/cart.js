import { createAction, handleActions } from "redux-actions";
import * as cartAPI from '../lib/api/cart';
import produce from 'immer'

const CHANGE_FIELD = 'cart/CHANGE_FIELD';

const CART_REGISTER = 'cart/CART_REGISTER'
const CART_SUCCESS = 'cart/CART_SUCCESS';
const CART_FAILURE = 'cart/CART_FAILURE'

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({ key, value }))

export const registerCart = ({ payload }) => async dispatch => {
    dispatch({
        type: CART_REGISTER
    })
    try {
        const cart = await cartAPI.registerCart({ payload })
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
        cartAmount: 0,
        cartSum: 0,

    },
    loading: false,
    cartSuccess: null,
    cartError: null
}

const cart = handleActions({
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