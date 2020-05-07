import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

function perc2color(perc) {
    perc = perc / 100;
    var hue = ((1 - perc) * 120).toString(10);
    return ["hsl(", hue, ",100%,50%)"].join("");
}
export default class WatchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: "timer Text",
            hr: 0,
            minute: 0,
            second: 0
        }
    }
    componentDidMount() {
        setInterval(() => {
            let time = new Date();
            this.setState({
                hr: (time.getHours() / 24) * 100,
                minute: (time.getMinutes() / 60) * 100,
                second: (time.getSeconds() / 60) * 100,
                timer: `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
            })
        })
    }
    render() {
        return (
            <div className="clockContainer">
                <div className="displayTime">{this.state.timer}</div>
                <div style={{ "color": `${perc2color(this.state.hr)}` }}>
                    <CircularProgress variant="static" value={this.state.hr} size="3rem" color="inherit" />
                </div>
                <div style={{ "color": `${perc2color(this.state.minute)}` }}>
                    <CircularProgress variant="static" value={this.state.minute} size="3.5rem" color="inherit" />
                </div>
                <div style={{ "color": `${perc2color(this.state.second)}` }}>
                    <CircularProgress variant="static" value={this.state.second} size="4rem" color="inherit" />
                </div>
            </div>
        )
    }
}
