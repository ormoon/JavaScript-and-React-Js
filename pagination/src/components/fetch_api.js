import axios from 'axios';
import {CONFIG} from './config';

export class FetchAPI {
    static getData = async (props) => {
        // console.log("props >> ",props)
        const url = CONFIG.URL.replace('~',props.pageNo)+props.pageSize;
        console.log(url)
        return await axios.get(url);
    }
}