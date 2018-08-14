import React, { Component } from 'react'
import request from '../utils/request';

export default class Teams extends Component {
    submit = () => {

        request.get(`/player/`)
            .then(res => {

                console.log(JSON.stringify(res.data));

            })
    };
    render() {
        console.log('singup form');
        return (<div>
            <div className='col-md-12'>получить статистику какой-то команды НХЛ/</div>
            <button onClick={this.submit}>ЖМИ</button>
        </div>)
    }
}