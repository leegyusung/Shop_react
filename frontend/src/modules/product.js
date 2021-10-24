import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import * as productAPI from '../lib/api/product';


const INITFORM = 'product/INITFORM';
const CHANGE_FIELD = 'product/CHANGE_FIELD';

const PRODUCT = 'product/PRODUCT';
const PRODUCT_SUCCESS = 'product/PRODUCT_SUCCESS';
const PRODUCT_FAILURE = 'product/PORDUCT_FAILURE'

const PRODUCTFILE = 'product/PRODUCTFILE';

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({ key, value }))

export const initForm = createAction(INITFORM);

export const register = ({ product }) => async dispatch => {
    const { productCategory, productName, productPrice, productAmount, productGrade, productDescription, productFile } = product;
    dispatch({
        type: PRODUCT,
    })
    try {
        const product = await productAPI.register({ productCategory, productName, productPrice, productAmount, productGrade, productDescription, productFile });
        dispatch({
            type: PRODUCT_SUCCESS,
            payload: product.data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_FAILURE,
            payload: error,
            error: true
        })
    }
}

export const getProduct = ({ productId }) => async dispatch => {
    dispatch({
        type: PRODUCT
    })
    try {
        const product = await productAPI.getProduct(productId)
        dispatch({
            type: PRODUCT_SUCCESS,
            payload: product.data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_FAILURE,
            payload: error,
            error: true
        })
    }

}

export const registerFile = createAction(PRODUCTFILE, productFile => productFile);

const initialState = {
    // - 상품명
    // - 단가
    // - 수량
    // - 카테고리
    // - 평점
    // - 설명
    products: {
        productCategory: "default",
        productName: "",
        productPrice: 0,
        productAmount: 0,
        productGrade: 0,
        productDescription: '',
        productFile: "",
    },
    loading: false,
    productSuccess: null,
    productError: null
}


const product = handleActions({
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => produce(state, draft => {
        draft["products"][key] = value;
    }),
    [INITFORM]: (state, action) => initialState.product,
    [PRODUCT]: (state, action) => produce(state, draft => {
        draft.loading = true;
    }),
    [PRODUCT_SUCCESS]: (state, action) => produce(state, draft => {
        draft.loading = false;
        draft.productSuccess = action.payload
    }),
    [PRODUCT_FAILURE]: (state, action) => produce(state, draft => {
        draft.loading = false;
        draft.productError = action.payload
    }),
    [PRODUCTFILE]: (state, action) => produce(state, draft => {
        draft.products.productFile = action.payload
    })

}, initialState);

export default product;