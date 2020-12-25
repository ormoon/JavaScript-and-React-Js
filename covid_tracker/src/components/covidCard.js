import React, { Component } from 'react'

export default class CovidCard extends Component {
    render() {
        let items = this.props.data;
        return (
            <div style={{ background: '#f5f5f5', padding: 20 }}>
                <p>{items.country}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>Total Cases</div>
                    <div>Total Deaths</div>
                    <div>Total Recovered</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ color: 'blue' }}>{items.cases}</div>
                    <div style={{ color: 'red' }}>{items.deaths}</div>
                    <div style={{ color: 'green' }}>{items.recovered}</div>
                </div>
                <div style={{ height: 20 }}></div>
                <hr />
                <div style={{ height: 20 }}></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>Today Cases</div>
                    <div>Today Deaths</div>
                    <div>Active Cases</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ color: 'blue' }}>{items.todayCases}</div>
                    <div style={{ color: 'red' }}>{items.todayDeaths}</div>
                    <div style={{ color: 'green' }}>{items.active}</div>
                </div>
                <div style={{ height: 20 }}></div>
                <hr />
                <div style={{ height: 20 }}></div>
                <div style={{ textAlign: 'center' }}>Critical Patients</div>
                <div style={{ textAlign: 'center' }}>{items.critical}</div>
            </div>
        )
    }
}
