import ProductList from "../../components/product/ProductList";
import * as productAPI from '../../lib/api/product';
import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import qs from 'query-string'


const ProductListContainer = ({ location }) => {
    const [form, setForm] = useState([]);
    const [loading, setLoading] = useState(false);
    //const [lastPage, setLastPage] = useState(1);
    useEffect(() => {
        const { page = 1 } = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        })
        setLoading(true);
        const getList = async ({ page }) => {
            await productAPI.list({ page })
                .then((result) => {
                    setForm(result.data);
                    //setLastPage(result.headers.last - page);
                    JSON.stringify(localStorage.setItem('last-page', result.headers['last-page']))
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        getList({ page });
        setLoading(false);
    }, [location.search])

    return (
        <ProductList
            form={form}
            loading={loading}
        />
    );
};

export default withRouter(ProductListContainer);