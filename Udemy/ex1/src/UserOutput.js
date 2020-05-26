import React from 'react'
import UserInput from './UserInput'
import './Containername.css'

export default function UserOutput (props){
    return( 
        <div className="containerName">
            <p onClick={ props.click }>{ props.name } { props.age } </p>
            <UserInput  mudanca={ props.change }/>
        </div>
        )
}