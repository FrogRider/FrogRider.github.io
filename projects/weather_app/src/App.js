import React from 'react';
import axios from 'axios';
import './App.css';
import Form from './components/form';
import { Component } from 'react';
import Temp from './components/temperature';

class App extends Component {
  state = {
    city: 'kyiv',
    temp: ''
  }

  translit = text => {
    const arrru = ['Я', 'я', 'Ю', 'ю', 'Ч', 'ч', 'Ш', 'ш', 'Щ', 'щ', 'Ж', 'ж', 'А', 'а', 'Б', 'б', 'В', 'в', 'Г', 'г', 'Д', 'д', 'Е', 'е', 
                   'Ё', 'ё', 'З', 'з', 'И', 'и', 'Й', 'й', 'К', 'к', 'Л', 'л', 'М', 'м', 'Н', 'н', 'О', 'о', 'П', 'п', 'Р', 'р', 'С', 'с', 
                   'Т', 'т', 'У', 'у', 'Ф', 'ф', 'Х', 'х', 'Ц', 'ц', 'Ы', 'ы', 'Ь', 'ь', 'Ъ', 'ъ', 'Э', 'э'];
    const arren = ['Ya', 'ya', 'Yu', 'yu', 'Ch', 'ch', 'Sh', 'sh', 'Sh', 'sh', 'Zh', 'zh', 'A', 'a', 'B', 'b', 'V', 'v', 'G', 'g', 'D', 'd',
                   'E', 'e', 'E', 'e', 'Z', 'z', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'R', 'r',
                   'S', 's', 'T', 't', 'U', 'u', 'F', 'f', 'H', 'h', 'C', 'c', 'Y', 'y', '`', '`', '\'', '\'', 'E', 'e'];
    for (var i = 0; i < arrru.length; i++) {
      let reg = new RegExp(arrru[i], "g");
      text = text.replace(reg, arren[i]);
    }
    this.setState({city: text});
  }

  getInputValue = async e => {
    e.preventDefault();
    const typedVal = e.target.elements.userName.value;
    await this.translit(typedVal);
    console.log(this.state.city)
    if (typedVal !== ''){
      // await this.setState ({city: e.target.elements.userName.value})
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=abc86827a442a37058277f8ff5d688ed&units=metric`)
        .then((res) => {
          this.setState({temp: res.data.main.temp + "°"});
          console.log(res)
        }).catch(() => {
          this.setState({temp: 'Unknown city...'})
        });
    } else
      this.setState({temp: 'Type your city first!'})
  };

  render(){
    return (
      <div className="App">
        <Form getInputValue={this.getInputValue}/>
        <Temp temp={this.state.temp}/>
      </div>
    );
  }
}

export default App;
