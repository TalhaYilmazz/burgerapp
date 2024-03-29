import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';
import Auxiliary from "../../../hoc/Auxiliary";

const buildControls = (props) => {

    const controls = [
        {label: 'Salad', type: 'salad'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Meat', type: 'meat'}
    ];

    return(
        <div className={classes.BuildControls}>
            <p>Total Price is: {props.price}</p>

            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label} label={ctrl.label}
                    added={() => props.addIngredient(ctrl.type)}
                    removed={() => props.removeIngredient(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                    price={props.price}
                />
                )
            )}
            <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>ORDER NOW</button>
        </div>
    );
};

export default buildControls;