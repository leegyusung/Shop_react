import { createAction, handleActions } from "redux-actions";
import * as replyAPI from '../lib/api/reply';
import produce from 'immer';

const INITFORM = 'reply/INITFORM';
const CHANGE_FIELD = 'reply/CHANGE_FIELD';

const REPLY_REGISTER = 'reply/REPLY_REGISTER';
const REPLY_REGISTER_SUCCESS = 'reply/REPLY_REGISTER_SUCCESS';
const REPLY_REGISTER_FAILURE = 'reply/REPLY_REGISTER_FAILURE';


export const initForm = createAction(INITFORM);

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({ key, value }));

export const registerReply = ({ replyContent, user, comment }) => async dispatch => {
    dispatch({
        type: REPLY_REGISTER
    })
    try {
        const reply = await replyAPI.registerReply({ replyContent, user, comment })
        dispatch({
            type: REPLY_REGISTER_SUCCESS,
            payload: reply.data
        })
    } catch (error) {
        dispatch({
            type: REPLY_REGISTER_FAILURE,
            payload: error,
            error: true
        })
    }
}

const initialState = {
    reply: {
        replyContent: '',
    },
    loading: false,
    replySuccess: null,
    replyError: null
}

const reply = handleActions({
    [INITFORM]: (state, action) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => produce(state, draft => {
        draft.reply[key] = value;
    }),
    [REPLY_REGISTER]: (state, action) => produce(state, draft => {
        draft.loading = true;
    }),
    [REPLY_REGISTER_SUCCESS]: (state, action) => produce(state, draft => {
        draft.loading = false;
        draft.replySuccess = action.payload
    }),
    [REPLY_REGISTER_FAILURE]: (state, action) => produce(state, draft => {
        draft.loading = false;
        draft.replyError = action.payload
    })
}, initialState);


export default reply;