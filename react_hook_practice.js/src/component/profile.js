import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

export default function Profile() {
    let history = useHistory();
    // console.log(history);
    let _id = history.location.state.id
    return (
        <div style={{ margin: '100px' }}>
            <p style={{ margin: '20px', backgroundColor: 'black', color: 'white', padding: '10px' }}>My Profile</p>
            <Button variant="contained" style={{ margin: '20px 300px' }} onClick={() => history.push(history.location.pathname + '/edit/' + _id)}>Edit Profile</Button>
        </div>
    )
}

