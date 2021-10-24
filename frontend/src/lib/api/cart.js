import client from "./client";


export const getCart = ({ username }) => client.get(`/api/cart/@:${username}`);

export const registerCart = ({ payload }) => client.post('/api/cart', { payload })