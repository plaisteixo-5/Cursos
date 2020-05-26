import React, { Component } from 'react'
import UserOutput from './UserOutput'
import './index.css'
import './Containername.css'

export default class App extends Component {
    state = {
        users:[
            { name: 'Fon', age:19 },
            { name: 'Marcos', age:42 },
            { name: 'Camila', age:32 }
        ]
    }

    switchName = ( newName) => {
        this.setState({
            users: [
                { name: newName, age:19 },
                { name: 'Marcos', age:42 },
                { name: 'Camila', age:32 }
            ]}
        )
    }

    handleChangeName = (event) => {
        this.setState({
            users: [
                { name: event.target.value, age:19 },
                { name: 'Marilene', age:42 },
                { name: 'Camila', age:32 }
            ]
        })
    }

    render(){

        const estilo = {
            backgroundColor: 'grey',
            width: "10%",
            cursor: "pointer",
            border: "none",
            fontColor: "black"
        }

        return(
            <>
                <h1>Users</h1>
                <div className="container">
                    <UserOutput change={ this.handleChangeName } click={ this.switchName.bind(this, 'Fontenele') } name={this.state.users[0].name} age={this.state.users[0].age} />
                    <UserOutput change={ this.handleChangeName } click={ () => this.switchName("Felipe") } name={this.state.users[1].name} age={this.state.users[1].age}/>
                    <UserOutput name={this.state.users[2].name} age={this.state.users[2].age}/>
                <button style={estilo}>Clique</button>
                </div>
            </>
        )
    }
}