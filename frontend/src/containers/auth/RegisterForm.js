import AuthForm from "../../components/auth/AuthForm";
import { useDispatch, useSelector } from "react-redux";
import { changeField, register, initForm } from '../../modules/auth';
import { useEffect } from "react";
import { withRouter } from "react-router";

const RegisterForm = ({ history }) => {
    const dispatch = useDispatch();
    const { form, auth, authError } = useSelector(({ auth }) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError
    }))

    const onChangeField = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value
            })
        )
    }

    const onSubmit = e => {
        e.preventDefault();
        const { username, password, passwordConfirm, admin } = form;
        if (password !== passwordConfirm)
            return alert('비밀번호가 일치하지않습니다.');
        dispatch(register({ username, password, admin }))
    }

    useEffect(() => {
        if (auth) {
            console.log(auth)
            history.push('/')
        }
        if (authError) {
            console.log(authError)
        }
    }, [auth, authError, history])


    useEffect(() => {
        dispatch(initForm());
    }, [dispatch])


    return (
        <AuthForm
            type="register"
            form={form}
            onChangeField={onChangeField}
            onSubmit={onSubmit}
        />
    );
};

export default withRouter(RegisterForm);