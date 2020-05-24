import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component  {

  state = {
    persons: [
      { name:"Carol", age:22 },
      { name:"Fon", age:19 },
      { name:"Marcoline", age:21 }
    ],
    otherState: 'Some value'
  }

  switchNameHandler = ( newName ) => {
    // DONT DO THIS: this.state.persons[0].name = "Felipe Fontenele"
    this.setState(
      {
        persons: [
          { name: newName, age:22 },
          { name:"Fon", age:19 },
          { name:"Marcoline", age:21 }
        ]
    });
  };

  render(){
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => { this.switchNameHandler('Mariana') }}>Switch name</button>
        <Person 
          age={ this.state.persons[0].age } 
          name={ this.state.persons[0].name } />
        <Person 
          age={ this.state.persons[1].age } 
          name={ this.state.persons[1].name }
          click={ this.switchNameHandler.bind(this,'Mariano!') }
          >Come pamonha</Person>
        <Person 
          age={ this.state.persons[2].age } 
          name={ this.state.persons[2].name } />
      </div>
  )}
}

export default App;