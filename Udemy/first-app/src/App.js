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
    otherState: 'Some value',
    showPersons: false,
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

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Maria é feia', age:22 },
        { name: event.target.value, age:19 },
        { name:"Milena", age:21 }
    ]})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render(){

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      paddin: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person) => {
            return  <Person name={person.name} age={person.age} />
          }) }
          </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
        style={style} 
        onClick={ this.togglePersonsHandler }>Toggle persons</button>
        { persons }
      </div>
  )}
}

export default App;