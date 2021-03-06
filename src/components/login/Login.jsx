import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/formsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} 
                    validate={[required]}
                    name={"email"} 
                    component={Input} />
            </div>
            <div>
                <Field placeholder={"Password"} 
                    validate={[required]}
                    type={"password"}
                    name={"password"} 
                    component={Input} />
            </div>
            <div>
                <Field type={"checkbox"} 
                    name={"rememberMe"} 
                    component={Input} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login} ) (Login);
