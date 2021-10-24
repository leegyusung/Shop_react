import ProductList from "../../components/product/ProductList";
import * as productAPI from '../../lib/api/product';
import { useEffect, useState } from "react";


const ProductListContainer = () => {
    const [form, setForm] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getList = async () => {
            await productAPI.list()
                .then((result) => {
                    setForm(result.data);
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        getList();
        setLoading(false);
    }, [])

    return (
        <ProductList
            form={form}
            loading={loading}
        />
    );
};

export default ProductListContainer;