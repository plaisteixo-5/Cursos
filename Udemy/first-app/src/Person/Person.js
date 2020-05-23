import React from 'react'

const person = (props) => {
    return (
        <div>
            <p>I'm a {props.name} and i am {props.age} years yold!</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;