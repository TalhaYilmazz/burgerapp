import React from 'react'
import classes from './Input.css'

const input = (props) => {

    let inputElement = null;
    let inputClasses = [classes.InputElement]

    let validationError = null;

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid)
        validationError = <p className={classes.ValidationError}>Please enter valid value</p>
    }

    switch(props.elementType){
        case ('input'):
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig}
                                  value={props.value} onChange={props.changed}></input>;
            break;
        case ('textarea'):
            inputElement = <textarea className={inputClasses.join(' ')} {...props.elementConfig}
                                     value={props.value} onChange={props.changed}></textarea>;
            break;
        case ('select'):
            inputElement = (<select className={inputClasses.join(' ')} value={props.value} onChange={props.changed}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>);
            break;
        default:
            inputElement = <input className={classes.InputElement}
                                  {...props.elementConfig}
                                  value={props.value}></input>;
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    );
};

export default input;