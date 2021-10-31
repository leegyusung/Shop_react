import { createAction, handleActions } from "redux-actions";
import * as commentAPI from '../lib/api/comment';
import produce from 'immer'

const INITFORM = 'comment/INITFORM';

const CHANGE_FIELD = 'comment/CHANGE_FIELD';

const COMMENT_GET = 'comment/COMMENT_GET';
const COMMENT_GET_SUCCESS = 'comment/COMMENT_GET_SUCCESS';
const COMMENT_GET_FAILURE = 'comment/COMMENT_GET_FAILURE';

const COMMENTS_GET = 'comment/COMMENTS_GET';
const COMMENTS_GET_SUCCESS = 'comment/COMMENTS_GET_SUCCESS';
const COMMENTS_GET_FAILURE = 'comment/COMMENTS_GET_FAILURE';

const COMMENT_REGISTER = 'comment/COMMENT_REGISTER';
const COMMENT_SUCCESS = 'comment/COMMENT_SUCCESS';
const COMMENT_FAILURE = 'comment/COMMENT_FAILURE';

const COMMENT_UPDATE = 'comment/COMMENT_UPDATE'
const COMMENT_UPDATE_SUCCESS = 'comment/COMMENT_UPDATE_SUCCESS';
const COMMENT_UPDATE_FAILURE = 'comment/COMMENT_UPDATE_FAILURE';

export const initForm = createAction(INITFORM);

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({ key, value }))


export const getList = () => async dispatch => {
    dispatch({
        type: COMMENTS_GET
    })
    try {
        const comments = await commentAPI.list();
        dispatch({
            type: COMMENTS_GET_SUCCESS,
            payload: comments.data
        })
    } catch (error) {
        dispatch({
            type: COMMENTS_GET_FAILURE,
            payload: error,
            error: true
        })
    }
}

export const getComment = ({ commentId }) => async dispatch => {
    dispatch({
        type: COMMENT_GET
    })
    try {
        const comment = await commentAPI.getComment({ commentId })
        dispatch({
            type: COMMENT_GET_SUCCESS,
            payload: comment.data
        })
    } catch (error) {
        dispatch({
            type: COMMENT_GET_FAILURE,
            payload: error,
            error: true
        })
    }
}

export const registerComment = ({ commentTitle, commentContent, user, username }) => async dispatch => {
    dispatch({
        type: COMMENT_REGISTER
    })
    try {
        const comment = await commentAPI.registerComment({ commentTitle, commentContent, user, username })
        dispatch({
            type: COMMENT_SUCCESS,
            payload: comment.data
        })
    } catch (error) {
        dispatch({
            type: COMMENT_FAILURE,
            payload: error,
            error: true
        })
    }
}

export const updateComment = ({ commentId, commentContent, commentTitle }) => async dispatch => {
    dispatch({
        type: COMMENT_UPDATE
    })
    try {
        const comment = await commentAPI.updateComment({ commentId, commentTitle, commentContent })
        dispatch({
            type: COMMENT_UPDATE_SUCCESS,
            payload: comment.data
        })
    } catch (error) {
        dispatch({
            type: COMMENT_UPDATE_FAILURE,
            payload: error,
            error: true
        })
    }
}

const initialState = {
    comment: {
        commentTitle: '',
        commentContent: '',
        commentReply: '',
        commentUser: ''
    },
    loading: false,
    comments: '',
    commentSucess: null,
    commentError: null
}

const comment = handleActions({
    [INITFORM]: (state, action) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => produce(state, draft => {
        draft.comment[key] = value
    }),
    [COMMENT_REGISTER]: (state, action) => produce(state, draft => {
        draft.loading = true;
    }),
    [COMMENT_SUCCESS]: (state, action) => produce(state, draft => {
        draft.loading = false;
        draft.commentSucess = action.payload
    }),
    [COMMENT_FAILURE]: (state, action) => produce(state, draft => {
        draft.loading = false;
        draft.commentError = action.payload
    }),
    [COMMENTS_GET]: (state, action) => produce(state, draft => {
        draft.loading = true;
    }),
    [COMMENTS_GET_SUCCESS]: (state, action) => produce(state, draft => {
        draft.loading = false;
        draft.comments = action.payload
    }),
    [COMMENTS_GET_FAILURE]: (state, action) => produce(state, draft => {
        draft.loading = false;
        draft.commentError = action.payload
    }),
    [COMMENT_GET]: (state, action) => produce(state, draft => {
        draft.loading = true;
    }),
    [COMMENT_GET_SUCCESS]: (state, action) => produce(state, draft => {
        draft.loading = false;
        draft.comment.commentTitle = action.payload.commentTitle;
        draft.comment.commentContent = action.payload.commentContent;
        draft.comment.commentReply = action.payload.commentReply;
        draft.comment.commentUser = action.payload.user;
    }),
    [COMMENT_GET_FAILURE]: (state, action) => produce(state, draft => {
        draft.loading = false;
        draft.commentError = action.payload
    }),
    [COMMENT_UPDATE]: (state, action) => produce(state, draft => {
        draft.loading = true;
    }),
    [COMMENT_UPDATE_SUCCESS]: (state, action) => produce(state, draft => {
        draft.loading = false;
        // draft.comment.commentTitle = action.payload.commentTitle;
        // draft.comment.commentContent = action.payload.commentContent;
    }),
    [COMMENT_UPDATE_FAILURE]: (state, action) => produce(state, draft => {
        draft.loading = false;
        draft.commentError = action.payload
    })

}, initialState)

export default comment;