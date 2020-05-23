import React, {Component} from 'react'
import Person from './Person/Person'
import './App.css'

class App extends Component {
    state = {
        persons: [
            { name: 'Fon', age: 19},
            { name: 'Manu', age: 29 },
            { name:'Mario', age:22 },
        ]
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, im a React App</h1>
                <p>This is really working!</p>
                <button>Switch name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} >Como pão</Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
            // React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Hi, im a React App he he'))    
        )
    }
}

export default App;