import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import AuthForm from '../../components/auth/AuthForm';
import { changeField, login, initForm } from '../../modules/auth';
import { tempUser } from '../../modules/user';
import { withRouter } from 'react-router';

const LoginForm = ({ history }) => {
    const dispatch = useDispatch();
    const { form, auth, authError } = useSelector(({ auth }) => ({
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError
    }))

    const onChangeField = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        )
    }

    const onSubmit = e => {
        e.preventDefault();
        const { username, password } = form;
        if ([username, password].includes(""))
            return alert('모두 입력해 주세요');
        dispatch(login({ username, password }));
    }

    useEffect(() => {
        if (auth) {
            console.log(auth);
            localStorage.setItem('user', JSON.stringify(auth));
            dispatch(tempUser(JSON.parse(localStorage.getItem('user'))));
            dispatch(initForm());
            history.push('/')
        }
        if (authError) {
            console.log(authError)
        }
    }, [auth, authError, history, dispatch])

    return (
        <AuthForm
            type="login"
            form={form}
            onChangeField={onChangeField}
            onSubmit={onSubmit}
        />
    );
};

export default withRouter(LoginForm);