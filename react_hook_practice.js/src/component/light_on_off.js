import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import light_off from '../assert/images/light_off.jpg';
import light_on from '../assert/images/light_glow.jpg';
import SecondComponent from './secondComponent';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useHistory } from 'react-router-dom';



export default function Light_OnOff() {
    let [count, setcount] = useState(0);
    let [imgUrl, setimgUrl] = useState(light_off);
    let [isLightOn, setLightOn] = useState(false);
    let history = useHistory();

    function handleClick() {
        isLightOn ? setimgUrl(light_off) : setimgUrl(light_on);
        setLightOn(!isLightOn);
    }

    return (
        <div style={{ margin: '20px 50px 0px 50px' }}>
            <div style={{ display: 'flex' }}>
                <div style={{ margin: '20px', padding: '10px' }}>
                    <div style={{ padding: "10px 40px" }}>{count}</div>
                    <Button variant="contained" onClick={() => { setcount(count + 1) }}>Increase</Button>
                </div>
                <img src={imgUrl} style={{ height: '500px', cursor: 'pointer' }} onClick={() => { handleClick() }} />
                <SecondComponent counter={count} />
            </div>
            <Button variant="contained" color="secondary" endIcon={<ArrowForwardIcon />} onClick={() => history.push('/thirdComponent')}>
                Next
            </Button>
            <Button variant="contained" color="primary" style={{ marginLeft: '400px' }} onClick={() => history.push('/profile', { id: count })}>
                View Profile
            </Button>
            <Button variant="contained" color="primary" style={{ marginLeft: '400px' }} onClick={() => history.push('/register')}>
                Register User
            </Button>
        </div>
    )
}
