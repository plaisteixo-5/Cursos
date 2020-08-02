import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${props => props.show ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: lightgreen;
    color: black;
  }
`

class App extends Component {

  state = {
    persons: [
      { id: 'efds', name: "Carol", age: 22 },
      { id: 'efsdsadd', name: "Fon", age: 19 },
      { id: 'efsssawedd', name: "Marcoline", age: 21 }
    ],
    otherState: 'Some value',
    showPersons: false,
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({this.state.persons[personIndex]})

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    //  const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, i) => {
            return <Person
              name={person.name}
              click={() => this.deletePersonHandler(i)}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          })}
        </div>
      );
      


    }

    let classes = [];
    if (this.state.persons.length <= 2) classes.push("red");
    if (this.state.persons.length <= 1) classes.push('bold');

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')} >This is really working!</p>
        <StyledButton show={this.state.showPersons} onClick={this.togglePersonsHandler}>
          Toggle persons
        </StyledButton>
        {persons}
      </div>
    )
  }

}

export default App;