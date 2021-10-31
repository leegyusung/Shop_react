import { createAction, handleActions } from "redux-actions";
import * as purchaseAPI from '../lib/api/purchase';
import produce from 'immer'

const INITFORM = 'purchase/INITFORM';

const PURCHASE_GET = 'purchase/PURCHASE_GET';
const PURCHASE_GET_SUCCESS = 'purchase/PURCHASE_GET_SUCCESS';
const PURCHASE_GET_FAILURE = 'purchase/PURCHASE_GET_FAILURE';

const CHANGE_FIELD_AMOUNT = 'purchase/CHANGE_FIELD_AMOUNT';
const CHANGE_FIELD_SUM = 'purchase/CHANGE_FIELD_SUM';

const PURCHASE_REGISTER = 'purchase/PURCHASE_REGISTER';
const PURCHASE_REGISTER_SUCCESS = 'purchase/PURCHASE_REGISTER_SUCCESS';
const PURCHASE_REGISTER_FAILURE = 'purchase/PURCHASE_REGISTER_FAILURE';

export const changePurchaseAmount = createAction(CHANGE_FIELD_AMOUNT, data => data)

export const changePurchaseSum = createAction(CHANGE_FIELD_SUM, data => data)

export const initForm2 = createAction(INITFORM);

export const getPurchase = ({ userId }) => async dispatch => {
    dispatch({
        type: PURCHASE_GET
    })
    try {
        const purchases = await purchaseAPI.getPurchase({ userId });
        console.log(purchases)
        dispatch({
            type: PURCHASE_GET_SUCCESS,
            payload: purchases.data
        })
    } catch (error) {
        dispatch({
            type: PURCHASE_GET_FAILURE,
            payload: error,
            error: true
        })
    }
}

export const registerPurchase = ({ product, user, purchaseAmount, purchaseSum }) => async dispatch => {
    dispatch({
        type: PURCHASE_REGISTER
    })
    try {
        const purchase = await purchaseAPI.registerPurchase({ product, user, purchaseAmount, purchaseSum });
        dispatch({
            type: PURCHASE_REGISTER_SUCCESS,
            payload: purchase.data
        })
    } catch (error) {
        dispatch({
            type: PURCHASE_REGISTER_FAILURE,
            payload: error,
            error: true
        })
    }
}

const initialState = {
    purchase: {
        purchaseAmount: 1,
        purchaseSum: 0,
    },
    loading: false,
    purchaseSuccess: null,
    purchaseError: null
}


const purchase = handleActions({
    [INITFORM]: (state, action) => initialState,
    [CHANGE_FIELD_AMOUNT]: (state, action) => produce(state, draft => {
        draft.purchase.purchaseAmount = action.payload
    }),
    [CHANGE_FIELD_SUM]: (state, action) => produce(state, draft => {
        draft.purchase.purchaseSum = action.payload
    }),
    [PURCHASE_GET]: (state, action) => produce(state, draft => {
        draft.loading = true;
    }),
    [PURCHASE_GET_SUCCESS]: (state, action) => produce(state, draft => {
        draft.loading = false;
        draft.purchaseSuccess = action.payload
    }),
    [PURCHASE_GET_FAILURE]: (state, action) => produce(state, draft => {
        draft.loading = false;
        draft.purchaseError = action.payload;
    }),
    [PURCHASE_REGISTER]: (state, action) => produce(state, draft => {
        draft.loading = true;
    }),
    [PURCHASE_REGISTER_SUCCESS]: (state, action) => produce(state, draft => {
        draft.loading = false;
        draft.purchaseSuccess = action.payload;
    }),
    [PURCHASE_REGISTER_FAILURE]: (state, action) => produce(state, draft => {
        draft.loading = false;
        draft.purchaseError = action.payload;
    })
}, initialState)

export default purchase;



