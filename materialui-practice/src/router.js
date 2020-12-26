import React, { Component } from 'react'
import MaterialHome from './components/material-home';
import TabUI from './components/tabUI';
import WeatherInfo from './components/weather/weatherinfo';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

export default class ReactRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/" exact>
                            <MaterialHome />
                        </Route>
                        <Route path="/tab" exact>
                            <TabUI/>
                        </Route>
                        <Route path="/weather" exact>
                            <WeatherInfo/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
