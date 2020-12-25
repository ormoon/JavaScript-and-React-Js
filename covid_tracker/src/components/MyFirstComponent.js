import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class MyFirstComponent extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    render() {
        return (
            <div>
                {this.props.location.state.name}
                <h1 style={{ color: "red" }}>Hello You are in MyFirstComponent</h1>
                <h2 style={{ color: "green" }}>Thanks for using React-Router-Dom</h2>
                <Link to={'/home2'}><button>Go to home2</button></Link>
            </div>
        )
    }
}

export default withRouter(MyFirstComponent);
