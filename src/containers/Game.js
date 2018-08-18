import React, { Component } from 'react';
import './styles/Game.css';
import * as StatAction from "../rdx/Stat/StatAction";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { FormSection, Field, reduxForm } from "redux-form";
import Match from '../components/Match';

let CreateGameForm = props => {
    const { StatReducer, handleSubmit } = props;
    console.log(StatReducer);


    return <div>
        <form onSubmit={handleSubmit} className='Wrapper'>
            <FormSection name="Home" className='Home'>
                <Match {...props}/>
            </FormSection>
            <FormSection name="Guest" className='Guest'>
                <Match {...props}/>
            </FormSection>
            <button type="submit">Submit</button>
        </form>
    </div>
};

const CreateGame = reduxForm({
    // a unique name for the form
    form: 'CreateGame'
})(CreateGameForm);

class Game extends Component {
    componentWillMount() {
        this.props.StatAction.getTeams();
        const { StatReducer } = this.props;
        console.log('teams!!!', StatReducer.teams);
        this.props.StatAction.getPlayers();
        console.log('players!!!', StatReducer.players);

    };

    handleSubmit = (value) => {
        console.log('SUBMIT', value);
        return false
    };


    render() {
        const { StatReducer } = this.props;
        console.log('players!!!', StatReducer.players);


        if (StatReducer.teams.length === 0) {
            return false
        }
        else {
            return <div>
                <CreateGame {...this.props} onSubmit={this.handleSubmit}/>
            </div>

        }

    };

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

export default connect(mapStateToProps, mapDispatchToProps)(Game)


