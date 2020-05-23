import React, {Component} from 'react'
import Person from './Person/Person'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hi, im a React App</h1>
                <p>This is really working!</p>
                <Person name="Fon" age="19" >Como pão</Person>
                <Person name="Manu" age="29"/>
                <Person name="Mario" age="22" />
            </div>
            // React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Hi, im a React App he he'))    
        )
    }
}

export default App;