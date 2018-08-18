import React, { Component } from 'react';
import './styles/Profile.css';
import * as StatAction from "../rdx/Stat/StatAction";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import logo from './NHL.svg.png';
import { Link } from 'react-router-dom';


class Profile extends Component {
    componentWillMount() {
        const { loginReducer } = this.props;
        console.log('id usera', loginReducer.id);
        this.props.StatAction.getTeams();
        this.props.StatAction.getPlayer(loginReducer.id);

    }


    render() {
        const { team } = this.props.StatReducer;
        const { teams } = this.props.StatReducer;
        const { player } = this.props.StatReducer;
        console.log('team',team);
        console.log('teams',teams);

        // const logo = teams.map(value => {if (team.team.id === value.id) {
        //     return ('http://localhost:5000'+ value.link)
        // }});
        if (!team) {
            return false
        }
        else {
        return (<div className='Profile'>
            <div className='Profile-header'>
                <div className='Header-logo'>
                    <img className='NHL-logo' src={teams.find( value => {
                        if (team.team.id === value.id) {
                        return value
                    }}).logo
                    }/>
                </div>
                <div className='Header-name'>{player.login}</div>
                <div className='Header-edit'>
                    <Link to='/Edit' className='Edit-link'>Edit Profile</Link>
                </div>
            </div>
            <div className='Stat'>
                <div className='FavTeamStat'>
                    <h3>{team.team.name}</h3>
                    <span>wins - {team.stat.wins}</span>
                    <span>losses - {team.stat.losses}</span>
                    <span>Games Played - {team.stat.gamesPlayed}</span>
                    <span>Goals per Game - {team.stat.goalsPerGame}</span>
                </div>
                <div className='UserStat'>
                    <h3>User Stat</h3>
                    <span>Goals - 3</span>
                    <span>Goals - 3</span>
                    <span>Goals - 3</span>
                    <span>Goals - 3</span>
                </div>
            </div>
        </div>)
    }

}

}


function mapStateToProps(state) {
    return {
        StatReducer: state.StatReducer,
        loginReducer: state.loginReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        StatAction: bindActionCreators(StatAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)