import React from 'react'
// import './Person.css'
import styled from 'styled-components';


const StyledDiv = styled.div`
    width: 60%;
    margin: 6px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 458px;
    }
`;

const person = (props) => {
    return (
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            {props.children ? <p>{props.children}</p> : null}
            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
    )
}

export default person;