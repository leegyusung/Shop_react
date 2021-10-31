import client from './client';


export const getPurchase = ({ userId }) => client.get(`/api/purchase/${userId}`);

export const registerPurchase = ({ product, user, purchaseAmount, purchaseSum }) => client.post('/api/purchase', ({ product, user, purchaseAmount, purchaseSum }));