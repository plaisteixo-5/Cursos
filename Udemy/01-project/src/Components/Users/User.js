import React from 'react';

const User = props => {
    const onDelete = item => {
        props.onDelete(props.id);
    };

    return (
        <div onClick={onDelete} style={{backgroundColor: 'white', textAlign: 'center'}}>
            Hello {props.userName} (age {props.userAge})
        </div>
    )
};

export default User;