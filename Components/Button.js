import React, { Component } from 'react';

class Button extends Component {
  change = (event) => {
    console.log('Button clicked!');
  };

  render() {
    return (
      <>
        <button onClick={this.change}> Button</button>
      </>
    );
  }
}

export default Button;
