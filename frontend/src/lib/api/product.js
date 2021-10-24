import client from './client';

export const register = ({ productCategory, productName, productPrice, productAmount, productGrade, productDescription, productFile }) =>
    client.post('/api/product/register', ({ productCategory, productName, productPrice, productAmount, productGrade, productDescription, productFile }))

export const getProduct = productId => client.get(`/api/product/${productId}`)

export const registerFile = ({ formData }) => client.post('/api/product/registerFile', ({ formData }))

export const list = () => client.get('/api/product')