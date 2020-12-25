import { Component } from "react";
import './home.css';
import Home2 from "./home2";

class Home extends Component {
    state = {
        name: "",
        email: ""
    };

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        return (
            <form>
                <h1>Home</h1>
                <div className="container">
                    <div>
                        <label>Name</label> &nbsp;
                <input type="text" id='name' placeholder="Enter your Name" onChange={this.handleChange} />
                    </div>
                    <br />
                    <div>
                        <label>Email</label> &nbsp;
                <input type="email" id='email' placeholder="Enter your email" onChange={this.handleChange} />
                    </div>
                    <div style={{ color: "white" }}>
                        {this.state.formData}
                    </div>
                </div>
                <Home2 username={this.state.name} email={this.state.email} />
            </form>

        )
    }
}

export default Home;