import produce from 'immer';
import { createAction, handleActions } from "redux-actions";
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITFORM = 'auth/INITFORM';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN+FAILURE';

const REGISTER = 'auth/REGISTER'
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';



export const initForm = createAction(INITFORM);

export const changeField = createAction(CHANGE_FIELD, ({ form, key, value }) => ({
    form, //login , register
    key, // username,password, passwordConfirm
    value, // 실제 바꾸려는 값
}))
export const register = ({ username, password, admin }) => async dispatch => {
    dispatch({
        type: REGISTER
    })
    try {
        const result = await authAPI.register({ username, password, admin });
        dispatch({
            type: REGISTER_SUCCESS,
            payload: result.data
        })
    } catch (error) {
        dispatch({
            type: REGISTER_FAILURE,
            payload: error,
            error: true
        })
        throw error
    }
}
export const login = ({ username, password }) => async dispatch => {
    dispatch({
        type: LOGIN
    })
    try {
        const result = await authAPI.login({ username, password });
        dispatch({
            type: LOGIN_SUCCESS,
            payload: result.data
        })
    } catch (error) {
        dispatch({
            type: LOGIN_FAILURE,
            payload: error,
            error: true
        })
        throw error
    }
}


const initialState = {
    login: {
        username: "",
        password: "",
    },
    register: {
        username: "",
        password: "",
        passwordConfirm: "",
        admin: false
    },
    loading: false,
    auth: null,
    authError: null
}


const auth = handleActions({
    [INITFORM]: (state, action) => initialState,
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) => produce(state, draft => {
        draft[form][key] = value
    }),
    [REGISTER]: (state, action) => produce(state, draft => {
        draft.loading = true;
    }),
    [REGISTER_SUCCESS]: (state, action) => produce(state, draft => {
        draft.loading = false;
        draft.auth = action.payload
    }),
    [REGISTER_FAILURE]: (state, action) => produce(state, draft => {
        draft.loading = false;
        draft.authError = action.payload
    }),
    [LOGIN]: (state, action) => produce(state, draft => {
        draft.loading = true;
    }),
    [LOGIN_SUCCESS]: (state, action) => produce(state, draft => {
        draft.loading = false;
        draft.auth = action.payload
    }),
    [LOGIN_FAILURE]: (state, action) => produce(state, draft => {
        draft.loading = false;
        draft.authError = action.payload
    })

}, initialState)


export default auth;