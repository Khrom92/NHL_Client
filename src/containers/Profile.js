import React, { Component } from 'react';
import './styles/Profile.css';
import * as StatAction from "../rdx/Stat/StatAction";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import logo from './NHL.svg.png';
import { Link } from 'react-router-dom';


class Profile extends Component {
    componentWillMount() {
        this.props.StatAction.getTeams();
    }
    render() {
        console.log('рендер профиля');
        return (<div className='Profile'>
            <div className='Profile-header'>
                <div className='Header-logo'>
                    <img className='NHL-logo' src={logo}/>
                </div>
                <div className='Header-name'>Igor Khromov</div>
                <div className='Header-edit'>
                    <Link to='/Edit' className='Edit-link'>Edit Profile</Link>
                </div>
            </div>
            <div className='Stat'>
                <div className='UserStat'>
                    <h3>User Stat</h3>
                    <span>Goals - 3</span>
                    <span>Goals - 3</span>
                    <span>Goals - 3</span>
                    <span>Goals - 3</span>
                    <span>Goals - 3</span>
                </div>
                <div className='FavTeamStat'>
                    <h3>Fave Team Stat</h3>
                    <span>Goals - 3</span>
                    <span>Goals - 3</span>
                    <span>Goals - 3</span>
                    <span>Goals - 3</span>
                    <span>Goals - 3</span>
                </div>

            </div>
        </div>)
    }
}




function mapStateToProps(state) {
    return {
        StatReducer: state.StatReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        StatAction: bindActionCreators(StatAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)