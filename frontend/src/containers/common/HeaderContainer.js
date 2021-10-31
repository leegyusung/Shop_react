import Header from "../../components/common/Header";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { check, logout } from '../../modules/user';
import { withRouter } from "react-router";

const HeaderContainer = ({ history, location }) => {
    const dispatch = useDispatch();
    const { user } = useSelector(({ user }) => ({
        user: user.user
    }))

    const onLogOut = useCallback(() => {
        const result = window.confirm('로그아웃 하시겠습니까?');
        if (!result) return;
        dispatch(logout())
    }, [dispatch])


    return (
        <Header
            user={user}
            onLogOut={onLogOut}
        />
    );
};

export default withRouter(HeaderContainer);