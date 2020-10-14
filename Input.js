import React from 'react';
import Icon from './Icon';

function Input(props) {
    const placeholder = props.placeholder;
    let classes = props.error ? `input input__${props.error}` : 'input';
    let labelClass = props.label && props.error ? "input__label_error" : "";
    
    if (props.fullWidth) {
        classes = `${classes} input__fullwidth`;
    }
    if (props.size) {
        classes = `${classes} input__${props.size}`;
    }
    if (props.multiple) {
        classes = `${classes} input__${props.multiple}`;
    }
    if (props.startIcon && props.placeholder) {
        classes = `${classes} input__${props.startIcon}`;
    }
    if (props.endIcon && props.placeholder) {
        classes = `${classes} input__${props.endIcon}`;
    }

    if (props.multiline === true) {
        classes = `${classes} input__multiline`;
    }
    return (
        <div className="container">
            <label className={labelClass}> {props.label}</label>
            <p><Icon name={props.startIcon} /></p>
            <input type="text" 
                value={props.value} 
                className={classes} 
                placeholder={placeholder}
                disabled={props.disabled} />
            <p><Icon name={props.endIcon}/></p>
        </div>
    )
}

export default Input;