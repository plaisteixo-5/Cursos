import React from 'react'

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            {props.children ? <p>{props.children}</p> : null}
        </div>
    )
}

export default person;