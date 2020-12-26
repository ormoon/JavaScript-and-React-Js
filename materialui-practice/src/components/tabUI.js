import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



export default class TabUI extends Component {

    state = { value: 0 };

    handleChange = (event, newValue) => {
        this.setState({
            value: newValue
        })
    }


    render() {
        return (
            <div>
                <AppBar position="static">
                    <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>
                </AppBar>
                <div>
                    {this.state.value === 0 ?
                        <div>This is First Tab</div> :
                        <div>
                            {this.state.value === 1 ?
                                <div>This is Second Tab</div> : <div>This is Third Tab</div>
                            }
                        </div>
                    }
                </div>
            </div>
        )
    }
}
