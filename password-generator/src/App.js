import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style/main.scss";
import generator from "./components/generatorClass";
import Switcher from "./components/switcher";
import Length from "./components/length";

class App extends Component {
  state = {
    lower: true,
    uper: false,
    symbol: false,
    number: false,
    length: 10,
    pwd: "Default password"
  };

  onChange = key => () =>
    this.setState(state => ({ ...state, [key]: !state[key] }));

  render() {
    const { length, lower, uper, symbol, number, pwd } = this.state;

    const newPwd = () =>
      new generator(length, lower, uper, symbol, number).generate;

    const switchers = Object.entries({
      lower: "Lower",
      uper: "Uper",
      symbol: "Symbol",
      number: "Number"
    }).map(([key, label], index) => (
      <Switcher
        key={`${index}-${this.state[key]}`}
        checked={this.state[key]}
        update={this.onChange(key)}
        label={label}
      />
    ));
    return (
      <div className="wrapper">
        <div className="pwd-generator">
        <p className="pwd-generator__pwd">{pwd}</p>
        <div
          onClick={() => {
            this.setState({
              pwd: newPwd()
            });
          }}
        >
          Generate
        </div>

        <div className="pwd-generator__switchers">
          {switchers}
        </div>

        <Length
          update={i => {
            this.setState({ length: i });
          }}
        />
      </div>
      </div>
    );
  }
}

export default App;
