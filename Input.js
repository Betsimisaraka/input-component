import React from 'react';

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

    return (
            <fieldset className="container">
                <label className={labelClass}> {props.label}</label>
                <input type="text"
                    className={classes}
                    placeholder={placeholder}
                    disabled={props.disabled} />
            </fieldset>
    )
}

export default Input;