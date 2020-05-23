import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    persons: [
      { name:"Carol", age:22 },
      { name:"Fon", age:19 },
      { name:"Marcoline", age:21 }
    ]
  }

  switchNameHandler = () => {
    console.log('Was Clicked!')
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person age={ this.state.persons[0].age } name={this.state.persons[0].name} />
        <Person age={ this.state.persons[1].age } name={this.state.persons[1].name}>Come pamonha</Person>
        <Person age={ this.state.persons[2].age } name={this.state.persons[2].name} />
      </div>
    );
  }
}

export default App;