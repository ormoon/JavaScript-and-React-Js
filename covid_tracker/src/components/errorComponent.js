import React, { Component } from 'react'

export default class ErrorComponent extends Component {
    render() {
        return (
            <div>
                <p>Something Wents Wrong</p>
                <button onClick={() => this.props.onRetry()}>Retry</button>
            </div>
        )
    }
}
