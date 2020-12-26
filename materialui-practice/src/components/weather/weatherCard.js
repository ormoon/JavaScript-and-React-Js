import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import Grid from '@material-ui/core/Grid';
import NavigationIcon from '@material-ui/icons/Navigation';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export default class WeatherCard extends Component {
    render() {
        let weather = this.props.data;
        return (
            <div style={{ margin: '20px 50px' }}>

                <Card variant="outlined">
                    <CardContent>
                        <Typography style={{ color: 'red' }} gutterBottom>
                            {new Date().toLocaleString()}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {weather.name},{weather.sys.country}
                        </Typography>
                        <Typography variant="h4" style={{ color: 'black', display: 'flex', padding: '30px 10px' }}>
                            <CloudQueueIcon fontSize='large' />
                            {weather.main.temp}&#8451;
                        </Typography>
                        <Typography variant="body2" component={'span'}>
                            <b>Feels like {weather.main.feels_like}°C. {weather.weather[0].description}. {weather.wind.speed <= 5 ? 'Light breeze' : 'High breeze'}</b>
                            <Grid container spacing={1} style={{ padding: '10px' }}>
                                <Grid item xs={3}>
                                    <div style={{ display: 'flex' }}>
                                        <NavigationIcon fontSize='small' style={{ transform: 'rotate(90deg)' }} />
                                        {weather.wind.speed}m/s
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div style={{ display: 'flex' }}>
                                        <CheckCircleOutlineIcon fontSize="small" />
                                        {weather.main.pressure}&nbsp;hPa</div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>Humidity: {weather.main.humidity}%</div>
                                </Grid>
                            </Grid>
                        </Typography>
                    </CardContent>
                </Card>

            </div>
        )
    }
}
