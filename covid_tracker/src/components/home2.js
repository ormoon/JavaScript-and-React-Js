import { Component } from "react";

class Home2 extends Component {
    render() {
        return (
            <div>
                <h1>Home2</h1>
                <p>Username : {this.props.username}</p>
                <p>email : {this.props.email}</p>
            </div>
        )
    }
}

export default Home2;