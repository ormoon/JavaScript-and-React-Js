import axios from 'axios';
import { CONFIG } from './weather_config';

export class WeatherAPI {
    static getCurrentWeatherData = async (cityName) => {
        let url = CONFIG.WEATHER_API.replace('~', cityName);
        console.log(url);
        return await axios.get(url + CONFIG.WEATHER_API_KEY+CONFIG.UNITS);
    }
}
