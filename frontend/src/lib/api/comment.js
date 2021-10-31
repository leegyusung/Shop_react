import client from './client';

export const list = () => client.get(`/api/comment`);

export const getComment = ({ commentId }) => client.get(`/api/comment/${commentId}`);

export const registerComment = ({ commentTitle, commentContent, user, username }) => client.post(`/api/comment/@${username}`, { commentTitle, commentContent, user })

export const updateComment = ({ commentId, commentTitle, commentContent }) => client.put(`/api/comment/${commentId}`, ({ commentTitle, commentContent }))