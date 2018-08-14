import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux';

import './styles/Registration.css';
import * as loginAction from '../rdx/userLogin/loginAction';
import { connect } from "react-redux";


class Registration extends Component {
    submit = values => {
        console.log(values);
        this.props.loginAction.saveUser(values);
    };

    render() {
        console.log('singup form');
        return (<div>
            <div className='Title'>Sign Up</div>
            <RegistrForm onSubmit={this.submit}/>
        </div>)
    }
}


let RegistrForm = props => {
    const { handleSubmit } = props;
    return <form onSubmit={handleSubmit} className='Form'>
        <div>
            <label htmlFor="login">Login</label>
            <Field name="login" component="input" type="text" value="login"/>
        </div>
        <div>
            <label htmlFor="password">password</label>
            <Field name="password" component="input" type="password" value="123"/>
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email" value="lohgdshg@mail.ru"/>
        </div>
        <div>
            <label htmlFor="name">name</label>
            <Field name="name" component="input" type="text" value="login"/>
        </div>
        <div>
            <label htmlFor="surname">surname</label>
            <Field name="surname" component="input" type="text" value="login"/>
        </div>
        <div>
            <label htmlFor="nickname">nickname</label>
            <Field name="nickname" component="input" type="text" value="login"/>
        </div>
        <div>
            <label htmlFor="birthday">birthday</label>
            <Field name="birthday" component="input" type="date" value="21.04.1992"/>
        </div>
        <button type="submit">Submit</button>
    </form>
};

const validate = values => {
    const errors = {};
    if (!values.login) {
        errors.login = 'Required'
    } else if (values.login.length > 15) {
        errors.login = 'Must be 15 characters or less'
    }if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length > 8) {
        errors.password = 'Must be 8 characters or less'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.name) {
        errors.name = 'Required'
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less'
    }
    if (!values.age) {
        errors.age = 'Required'
    } else if (isNaN(Number(values.age))) {
        errors.age = 'Must be a number'
    } else if (Number(values.age) < 18) {
        errors.age = 'Sorry, you must be at least 18 years old'
    }
    return errors
};
const warn = values => {
    const warnings = {};
    if (values.age < 19) {
        warnings.age = 'Hmm, you seem a bit young...'
    }
    return warnings
};

RegistrForm = reduxForm({
    form: 'SignUp',
    validate,
    warn

})(RegistrForm);



function mapStateToProps(state) {
    return {
        loginReducer: state.loginReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginAction: bindActionCreators(loginAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)

