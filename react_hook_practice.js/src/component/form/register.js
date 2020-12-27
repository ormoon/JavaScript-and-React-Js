import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';

export default function Register() {
    const [userRegister, setuserRegister] = useState({ name: '', address: '', email: '' });

    function handleChange(event) {
        // console.log(event.target.value)
        userRegister[event.target.id] = event.target.value;
        setuserRegister({ ...userRegister });
    }

    return (
        <div style={{ margin: '100px', padding: '30px', borderRadius: '10px' }}>
            <Grid container spacing={2}>
                <Grid item xs="12" sm="4">
                    <TextField label="Username" id="name" value={userRegister.name} helperText="Please enter a valid name" error={false} onChange={handleChange} fullWidth={false} />
                </Grid>
                <Grid item xs="12" sm="4">
                    <TextField label="Address" id="address" value={userRegister.address} helperText="Please enter a valid address" error={false} onChange={handleChange} fullWidth={false} />
                </Grid>
                <Grid item xs="12" sm="4">
                    <TextField label="Email" id="email" value={userRegister.email} helperText="Please enter a valid mail address" error={false} onChange={handleChange} fullWidth={false} />
                </Grid>

            </Grid>
            <Card style={{ marginTop: '50px', padding: '20px' }}>
                <Grid container spacing={2}>
                    <Grid item xs="12" sm="4">Name</Grid>
                    <Grid item xs="12" sm="4">{userRegister.name}</Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs="12" sm="4">Address</Grid>
                    <Grid item xs="12" sm="4">{userRegister.address}</Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs="12" sm="4">Email</Grid>
                    <Grid item xs="12" sm="4">{userRegister.email}</Grid>
                </Grid>
            </Card>
        </div>
    )
}
