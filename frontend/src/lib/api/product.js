import client from './client';
import qs from 'query-string'


export const register = ({ productCategory, productName, productPrice, productAmount, productGrade, productDescription, productFile }) =>
    client.post('/api/product/register', ({ productCategory, productName, productPrice, productAmount, productGrade, productDescription, productFile }))

export const getProduct = productId => client.get(`/api/product/${productId}`)

export const registerFile = ({ formData }) => client.post('/api/product/registerFile', ({ formData }))

export const list = ({ page }) => {
    const queryString = qs.stringify({
        page
    })
    console.log(queryString);
    return client.get(`/api/product/?${queryString}`)
}