import React, {Component} from 'react'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hi, im a React App</h1>
            </div>
            // React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Hi, im a React App he he'))    
        )
    }
}

export default App;