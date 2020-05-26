import React from 'react'

export default function UserOutput(props) {
    return(
        <input onChange={ props.change } type="text" />
    )
}