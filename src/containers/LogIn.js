import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';


import './styles/Login.css';
import * as loginAction from "../rdx/userLogin/loginAction";
import { bindActionCreators } from 'redux';


 class LogIn extends Component {
    submit = values => {
        console.log(values);
        this.props.loginAction.loginSubmit(values);

    };

    render() {
        const { loginReducer } = this.props;
        console.log('singup form');
        return (<div className='Title'>
            {loginReducer.auth ? <div>
                    Authenticate complete!
                </div>

                : <div>
                    <div className='Title'>LogIN</div>
                    <LogINForm  onSubmit={this.submit}/>
                </div>}
            </div>
            )
    }
}


let LogINForm = props => {
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
        <button type="submit">Submit</button>
    </form>
};

LogINForm = reduxForm({
    // a unique name for the form
    form: 'LogIN'
})(LogINForm);


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

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)