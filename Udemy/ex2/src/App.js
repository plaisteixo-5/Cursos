import React, { Component } from 'react';
import './App.css';

import Validation from './ValidationComponent/Validation'
import Char from './Char/Char'

class App extends Component {

  state = {
    userInput: ''
  }

  inputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  }

  deleteCharHandle = ( index ) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);

    const updateText = text.join('');
    this.setState({userInput: updateText});
  }

  render() {
    let charList = this.state.userInput.split('').map((char, i) => {
      return <Char 
      character={char} 
      key={i} 
      click={() => this.deleteCharHandle(i)}
      />
    });

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        { charList }
      </div>
    );
  }
}

export default App;
