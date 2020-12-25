import React, { Component } from 'react'
import DateTime from "../components/time";
import axios from 'axios';
import CovidCard from './covidCard';
import ErrorComponent from './errorComponent';
import { withRouter } from 'react-router-dom';

class CovidApi extends Component {

    state = {
        covidData: [],
        duplicateData: [],
        loading: true,
        error: false
    }

    componentDidMount() {
        this.getCovidData();
    }

    getCovidData = async () => {
        try {
            let response = await axios.get("https://coronavirus-19-api.herokuapp.com/countries/");
            console.log(response.data);
            this.setState({
                covidData: response.data,
                duplicateData: response.data,
                loading: false
            })
        } catch (e) {
            this.setState({
                error: true
            })
        }
    }

    onRetry = () => {
        this.setState({
            error: false,
            loading: true
        });
        this.getCovidData();
    }

    handleChange = (event) => {
        let search = this.state.covidData.filter((data) => {
            return (data.country.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1)
        });
        this.setState({
            duplicateData: search
        })
    }

    render() {
        return (
            <div>
                <DateTime />
                <div style={{ display: 'flex', direction: 'ltr' }}>
                    <h1>Welcome to This covid tracker app</h1>
                    <button style={{ margin: 'auto 0 auto 45%', border: 'none', outline: 'transparent', fontSize: '15px', padding: '10px 15px', backgroundColor: 'purple', color: 'white', borderRadius: '3px', cursor: 'pointer' }}
                        // onClick={this.props.history.push('/home')}
                        onClick={() => { this.props.history.push('/home', { name: 'hello' }) }}
                    >Goto Next</button>
                    <button style={{ margin: 'auto 0 auto 2%', border: 'none', outline: 'transparent', fontSize: '15px', padding: '10px 15px', backgroundColor: 'purple', color: 'white', borderRadius: '3px', cursor: 'pointer' }}
                        // onClick={this.props.history.push('/home')}
                        onClick={() => { this.props.history.push('/time/123/history', { name: 'hello' }) }}
                    >Dynamic Route</button>
                </div>
                <hr />
                <div style={{ maxWidth: 600, margin: 'auto' }}>
                    {this.state.error ? <ErrorComponent onRetry={this.onRetry} /> :
                        this.state.loading ? <div>Data is Loading</div> :
                            <div>
                                <input type="text" style={{ border: 'solid black 1px', width: 600 }} onChange={this.handleChange} />
                                <br />
                                {this.state.duplicateData.map(data =>
                                    <CovidCard data={data} key={data.country} />
                                )}
                            </div>
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(CovidApi);