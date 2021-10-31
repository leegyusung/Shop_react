import { PurchaseDetail } from "../../components/common/MypageForm";
import { useDispatch, useSelector } from "react-redux";
import { getPurchase } from '../../modules/purchase';
import { useEffect } from "react";


const PurChaseDetailContainer = () => {
    const dispatch = useDispatch();
    const username = JSON.parse(localStorage.getItem('user'));
    const { loading, purchaseSuccess } = useSelector(({ purchase }) => ({
        loading: purchase.loading,
        purchaseSuccess: purchase.purchaseSuccess
    }))

    useEffect(() => {
        dispatch(getPurchase({
            userId: username._id
        }))
    }, [dispatch, username._id])

    return (
        <PurchaseDetail
            loading={loading}
            purchase={purchaseSuccess}
        />
    );
};

export default PurChaseDetailContainer;