import React, { Component } from 'react';


import './App.css';
import {BrowserRouter} from "react-router-dom";

import Main from "./components/MainComponent";

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            users:[],
            nroPage: 1
        }
    }




//https://api.github.com/search/users?q=type:user&page=2&per_page=1

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Main users={this.state.users} nroPage={this.state.nroPage}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
