import React, { Component } from 'react'
import UserOutput from './UserOutput'
import UserInput from './UserInput'

export default class App extends Component {
    state = {
        users:[
            { name: 'Fon', age:19 },
            { name: 'Marcos', age:42 },
            { name: 'Camila', age:32 }
        ]
    }

    render(){
        return(
            <>
                <h1>Users</h1>
                <UserInput />
                <UserOutput name={this.state.users[0].name} age={this.state.users[0].age} />
                <UserOutput name={this.state.users[1].name} age={this.state.users[1].age}/>
                <UserOutput name={this.state.users[2].name} age={this.state.users[2].age}/>
                <button>Clique</button>
            </>
        )
    }
}