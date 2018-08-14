import React, { Component } from 'react';
import './App.css';

import Header from './containers/layout/Header';
import Main from './containers/layout/Main';



class App extends Component {
    render() {
        return (
            <div className="App">
                <div className='App-header'>
                    <Header/>
                </div>
                <div className='App-main'>
                    <Main/>
                </div>

            </div>
        );
    }
}

export default App;









