import { Component } from "react";
import { withRouter } from 'react-router-dom';

class DateTime extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.match.params);
        console.log(this.props.match.params.id);
        console.log(this.props.match.params.name);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }
    //If we create interval we need to clear it
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    getReadableDate() {
        let hour;
        let time;
        let hours = this.state.date.getHours();
        (hours > 12) ? time = 'pm' : time = 'am';
        (hours % 12) !== 0 ? hour = (hours % 12) : hour = 12;
        return ({
            hour,
            time
        })
    }

    render() {
        return (
            <i>{this.getReadableDate().hour}:{this.state.date.getMinutes()}:{this.state.date.getSeconds()}&nbsp;{this.getReadableDate().time}</i>
        )
    }
}

export default withRouter(DateTime);