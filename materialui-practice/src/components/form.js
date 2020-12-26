import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './material.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withRouter } from 'react-router';


class Form extends Component {
    state = { name: '', open: false, anchorEl: null };

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        })
    }
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    }
    handleMenuClick = (event) => {
        this.setState({
            anchorEl: event.currentTarget
        })
    }
    handleMenuClose = () => {
        this.setState({
            anchorEl: null
        })
    }
    render() {
        return (
            <div>
                <Grid container spacing={2}>
                    {[0, 1, 2].map((value) => (
                        <Grid key={value} item xs="12" sm="4">
                            <TextField id="name" value={this.state.name} onChange={this.handleChange} label="Name" helperText="Please Enter your Name" error={false} disabled={false} fullWidth={true} color="primary" variant="outlined" />
                        </Grid>
                    ))}
                </Grid>

                <div>{this.state.name}</div>
                <div>
                    <Box
                        display="flex"
                        m={1}
                        p={1}
                        justifyContent="flex-start"
                    >
                        <Box p={1} justifyContent="flex-start">
                            <Button variant="contained" color="primary" endIcon={<ArrowBackIcon />} onClick={() => this.props.history.push('/tab')}>Pre</Button>
                        </Box>
                        <Box p={1} justifyContent="flex-end">
                            <Button variant="contained" color="primary" startIcon={<ArrowForwardIcon />} onClick={() => this.props.history.push('/weather')}>Next</Button>
                        </Box>
                    </Box>
                </div>
                <div>
                    <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                        Open alert dialog
                    </Button>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Let Google help apps determine location. This means sending anonymous location data to
                                Google, even when no apps are running.
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Disagree
                        </Button>
                            <Button onClick={this.handleClose} color="primary" autoFocus>
                                Agree
                        </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <div>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleMenuClick}>
                        Open Menu
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={this.state.anchorEl}
                        open={Boolean(this.state.anchorEl)}
                        onClose={this.handleMenuClose}
                    >
                        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
                        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
                        <MenuItem onClick={this.handleMenuClose}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>
        )
    }
}

export default withRouter(Form);