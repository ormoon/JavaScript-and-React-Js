import axios from 'axios';
import { CONFIG } from './config';

export class NewsAPI {
    static getCurrentNews = async () => {
        return await axios.get(CONFIG.NEWS_API + CONFIG.API_KEY);
    };
}