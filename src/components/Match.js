import React, { Component } from 'react'
import { Field } from "redux-form";




export default class Match extends React.Component {
    render() {

        const { StatReducer } = this.props;


        return <div>
            <div>
                <label htmlFor="playerId"> playerId </label>
                <Field name="playerId" component="input" type="text"/>
            </div>

            <div>
                <label htmlFor="playerId">playerId</label>
                <Field name="playerId" component="select">
                    <option></option>
                    {
                        StatReducer.players && StatReducer.players.map(player => (
                            <option key={player.id} value={Number(player.id)}>{player.login}</option>))
                    }
                </Field>
            </div>
            <div>
                <label htmlFor="shoots">shoots</label>
                <Field name="shoots" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="goals"> goals </label>
                <Field name="goals" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="hits">hits</label>
                <Field name="hits" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="passes"> passes </label>
                <Field name="passes" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="powerPlays">powerPlays</label>
                <Field name="powerPlays" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="powerPlaysDone"> powerPlaysDone </label>
                <Field name="powerPlaysDone" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="teamId">Favorite Team</label>
                <Field name="teamId" component="select">
                    <option></option>
                    {
                        StatReducer.teams && StatReducer.teams.map(team => (
                            <option key={team.id} value={Number(team.id)}>{team.name}</option>))
                    }
                </Field>
            </div>
            <div>
                <label htmlFor="timeInAttack"> timeInAttack </label>
                <Field name="timeInAttack" component="input" type="date"/>
            </div>
            <div>
                <label htmlFor="penaltyTime">penaltyTime</label>
                <Field name="penaltyTime" component="input" type="date"/>
            </div>
            <div>
                <label htmlFor="powerPlays"> powerPlays </label>
                <Field name="powerPlays" component="input" type="date"/>
            </div>
        </div>
    }
}