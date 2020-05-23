import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const 
App = () =>  {

  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name:"Carol", age:22 },
      { name:"Fon", age:19 },
      { name:"Marcoline", age:21 }
    ]
  });

  const [ otherState, setOtherState] = useState('some other value');

  const switchNameHandler = () => {
    // DONT DO THIS: this.state.persons[0].name = "Felipe Fontenele"
    setPersonsState(
      {
        persons: [
          { name:"Maria", age:22 },
          { name:"Fon", age:19 },
          { name:"Marcoline", age:21 }
        ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person age={ personsState.persons[0].age } name={ personsState.persons[0].name } />
      <Person age={ personsState.persons[1].age } name={ personsState.persons[1].name }>Come pamonha</Person>
      <Person age={ personsState.persons[2].age } name={ personsState.persons[2].name } />
    </div>
  );
}

export default App;