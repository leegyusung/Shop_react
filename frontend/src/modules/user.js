import { createAction, handleActions } from 'redux-actions'
import * as authAPI from '../../src/lib/api/auth'
import produce from 'immer';


const TEMP_USER = 'user/TEMP_USER';
const CHECK = 'user/CHECK';
const LOGOUT = 'auth/LOGOUT'

export const tempUser = createAction(TEMP_USER, user => user);

export const check = createAction(CHECK);

const initialState = {
    user: {
        username: '',
        admin: ''
    },
    userError: '',
    loading: false
}

export const logout = () => async dispatch => {
    dispatch({
        type: LOGOUT
    })
    try {
        await authAPI.logout();
        localStorage.removeItem('user')
    } catch (error) {

    }
}

const user = handleActions({
    [TEMP_USER]: (state, action) => produce(state, draft => {
        if (typeof action.payload == "string") {
            const temp = JSON.parse(action.payload)
            draft.user.username = temp.username;
            draft.user.admin = temp.admin;
            return;
        } else {
            draft.user.username = action.payload.username;
            draft.user.admin = action.payload.admin;
        }
    }),
    [CHECK]: (state, action) => initialState,
    [LOGOUT]: (state, action) => initialState

}, initialState)

export default user;