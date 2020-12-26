import React, { Component } from 'react';
import './weather_api';
import { WeatherAPI } from './weather_api';
import { CircularProgress } from '@material-ui/core';
import WeatherCard from './weatherCard';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';



export default class WeatherInfo extends Component {

    state = {
        city: 'kathmandu',
        weatherData: {},
        isLoading: true,
        isError: false
    }

    componentDidMount() {
        this.getWeatherData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.city !== this.state.city) {
            this.getWeatherData();
        }
    }


    getWeatherData = () => {
        WeatherAPI.getCurrentWeatherData(this.state.city)
            .then((res) => {
                this.setState({
                    weatherData: res.data,
                    isLoading: false
                })
            })
            .catch((error) => {
                this.setState({
                    isError: true,
                    isLoading: false
                })
            })
    }

    handleError = () => {
        this.setState({ isError: false, isLoading: true });
    }

    handleChange = (event) => {
        this.setState({
            city: document.getElementById('cityName').value
        });
    }

    render() {
        return (
            <div>
                <div>

                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap style={{ marginRight: '63%' }}>
                                Weather App
                            </Typography>
                            <div style={{ display: 'flex', position: 'relative', backgroundColor: 'white', borderRadius: '10px', width: '100' }}>
                                <InputBase
                                    id="cityName"
                                    defaultValue={this.state.city}
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'Enter city name' }}
                                    style={{ padding: '0px 6px' }}
                                />
                                <SearchIcon style={{ color: 'black', paddingTop: "4px", cursor: 'pointer' }} onClick={() => { this.handleChange() }} />
                            </div>
                        </Toolbar>
                    </AppBar>

                </div>
                {this.state.isError ?
                    <div style={{ margin: '50px' }}>
                        <Button variant="contained" color="primary" onClick={() => this.handleError()}>
                            Try Again
                    </Button>
                    </div> :
                    <div>
                        {this.state.isLoading ? <CircularProgress /> :
                            <div>
                                {/* {JSON.stringify(this.state.weatherData)} */}
                                <WeatherCard data={this.state.weatherData} />
                            </div>
                        }
                    </div>
                }
            </div>
        )
    }
}
