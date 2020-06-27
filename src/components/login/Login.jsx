import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/formsControls/FormsControls';
import { required } from '../../utils/validators/validators';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} 
                    validate={[required]}
                    name={"login"} 
                    component={Input} />
            </div>
            <div>
                <Field placeholder={"Password"} 
                    validate={[required]}
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
        console.log(formData);
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit()} />
    </div>
}

export default Login;