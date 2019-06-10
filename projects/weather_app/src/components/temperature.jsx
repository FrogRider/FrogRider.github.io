import React from 'react'
import { Component } from 'react';

class Temp extends Component {
    render() {
        return (
          <div className="temp">
            <p>{this.props.temp === '' ? "Choose your city" : this.props.temp}</p>
          </div>
        )
      }
}

export default Temp;

