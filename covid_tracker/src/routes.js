import React, { Component } from 'react'
import MyFirstComponent from './components/MyFirstComponent'
import Home from './components/home'
import DateTime from './components/time';
import CovidApi from './components/covidapi';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from "react-router-dom";

export default class routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/" exact>
                            <CovidApi />
                        </Route>
                        <Route path="/home" exact>
                            <MyFirstComponent />
                        </Route>
                        <Route path="/home2" exact>
                            <Home />
                        </Route>
                        <Route path="/time/:id/:name" exact>
                            <DateTime />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
