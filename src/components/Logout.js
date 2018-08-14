import React, { Component } from 'react'
import { connect } from 'react-redux';


import './Logout.css';
import * as loginAction from "../rdx/userLogin/loginAction";
import { bindActionCreators } from 'redux';

class Logout extends React.Component{
    submit = () => {

        this.props.loginAction.userLogout();

    };
    render() {

        return (<div className='Logout'>
                <button onClick={this.submit} >Logout</button>
            </div>
        )
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Logout)