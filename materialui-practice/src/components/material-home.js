import React, { Component } from 'react'
import Form from './form'
import Header from './header'


export default class MaterialHome extends Component {
    render() {
        return (
            <div>
                <Header />
                <div style={{ margin: '20px' }}>
                    <Form />
                </div>
            </div>
        )
    }
}
