import React from 'react';

function Input(props) {
    const placeholder = props.placeholder; 
    return (
        <input type="text" placeholder={placeholder} />
    )
}

export default Input;