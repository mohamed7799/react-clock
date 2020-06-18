import React, { Component } from "react";
import "./clock.css";
export default class clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time:
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      let temp = new Date();
      this.setState({
        time:
          temp.getHours() + ":" + temp.getMinutes() + ":" + temp.getSeconds(),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <p> {this.state.time}</p>
      </div>
    );
  }
}
