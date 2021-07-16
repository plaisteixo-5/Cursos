import React from 'react';

const User = props => {
    return (
        <div style={{backgroundColor: 'white', textAlign: 'center'}}>
            Hello {props.userName} (age {props.userAge})
        </div>
    )
};

export default User;