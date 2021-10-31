import client from "./client";


export const getCart = ({ username }) => client.get(`/api/cart/@${username}`);

export const registerCart = ({ cartAmount, cartSum, product, user }) => client.post('/api/cart', { cartAmount, cartSum, product, user })

export const deleteCart = ({ cartId }) => client.delete(`/api/cart/${cartId}`)