import React from 'react';
import { Field, reduxForm } from 'redux-form'
import './styles/Profile.css';
import * as StatAction from "../rdx/Stat/StatAction";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';




let EditFormComponent = props => {
    const { StatReducer, handleSubmit } = props;


    return <div>
        <form onSubmit={handleSubmit} className='Form'>
            <div>
                <label htmlFor="password">password</label>
                <Field name="password" component="input" type="password"/>
            </div>
            <div>
                <label htmlFor="name">name</label>
                <Field name="name" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="surname">surname</label>
                <Field name="surname" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="nickname">nickname</label>
                <Field name="nickname" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="teamId">Favorite Team</label>
                <Field name="teamId" component="select">
                    <option></option>
                    {
                        StatReducer.teams && StatReducer.teams.map( team => (
                        <option key={team.id} value={ Number(team.id) }>{team.name}</option>))
                    }

                </Field>
            </div>
            <div>
                <label htmlFor="birthday">birthday</label>
                <Field name="birthday" component="input" type="date"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
};

const EditForm = reduxForm({
    // a unique name for the form
    form: 'Edit'
})(EditFormComponent);




class EditProfile extends React.Component {
    componentWillMount() {
        this.props.StatAction.getTeams();
    }
    handleSubmit = values => {
        console.log('это отправка формы', values);
        this.props.StatAction.updatePlayer(values);


    };

    render() {
        return <div>
            <Link to='/Profile/edit' className='Header-link'>{'< Back'}</Link>
            <EditForm {...this.props}  onSubmit={this.handleSubmit}/>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)