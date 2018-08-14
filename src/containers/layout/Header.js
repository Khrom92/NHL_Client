import { Link } from 'react-router-dom';
import './styles/Header.css';
import React, { Component } from 'react'
import * as loginAction from "../../rdx/userLogin/loginAction";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Logout from '../../components/Logout';

class Header extends Component {
    render() {
        const { loginReducer } = this.props;

        return (
            <header className='Header'>
                <div className='Header-nav'>
                    <Link to='/Teams' className='Header-link'>Teams</Link>
                </div>
                {loginReducer.auth ?
                    <div className='Header-login'>
                        <Link to='/Profile' className='Header-link'>Profile</Link>
                        <Logout/>
                    </div>


                    : <div className='Header-login'>
                <Link to='/Registration' className='Header-link'>SignUp</Link>
                <Link to='/Login' className='Header-link'>Login</Link>
            </div>}


            </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)



