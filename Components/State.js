import React, { Component } from 'react';
import '../style.css';
class State extends Component {
  state = {
    message: 'Click ',
    subscribed: false,
  };

  clickHandler = (event) => {
    this.setState({ message: 'Clicked!', subscribed: true });
  };

  render() {
    const { message, subscribed } = this.state;
    let className = 'subscribe-button';
    if (!subscribed) {
      className += ' subscribe-button_red';
    } else {
      className += ' subscribe-button_grey';
    }

    return (
      <>
        <br></br>
        <br></br>

        <button className={className} onClick={this.clickHandler} type="button">
          {message}
        </button>
      </>
    );
  }
}

export default State;
