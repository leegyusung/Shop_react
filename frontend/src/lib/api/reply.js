import client from './client';


export const registerReply = ({ replyContent, user, comment }) => client.post('/api/reply', ({ replyContent, user, comment }))