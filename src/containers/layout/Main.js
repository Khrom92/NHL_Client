import { Switch, Route } from 'react-router-dom'
import Profile from "../Profile";
import Registration from "../Registration";
import Teams from "../Teams";
import LogIn from "../LogIn";




import React, { Component } from 'react'
import EditProfile from "../EditProfile";

export default class Main extends Component {
    render() {
        return (
            <main style={{height: '100%'}}>
                <Switch>
                    <Route path='/Profile' component={Profile}/>

                    <Route path='/Edit' component={EditProfile}/>

                    <Route path='/Registration' component={Registration}/>
                    <Route path='/Login' component={LogIn}/>
                    <Route path='/Teams' component={Teams}/>
                </Switch>
            </main>
        )
    }
}