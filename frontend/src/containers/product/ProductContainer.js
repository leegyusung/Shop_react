import React, { useEffect } from 'react';
import ProductForm from '../../components/product/ProductForm';
import { useDispatch, useSelector } from "react-redux";
import { changeField } from "../../modules/product";
import { initForm } from '../../modules/cart';

const ProductContainer = () => {
    const dispatch = useDispatch();
    const { form } = useSelector(({ product }) => ({
        form: product.products
    }))

    const onChangeField = e => {
        const { name, value } = e.target;
        if (name === "productPrice" || name === "productAmount") {
            dispatch(changeField({
                key: name,
                value: parseInt(value)
            }))
            return;
        }
        dispatch(changeField({
            key: name,
            value: value
        }))
    }

    return (
        <ProductForm
            form={form}
            onChangeField={onChangeField}>
        </ProductForm>
    );
};

export default ProductContainer;