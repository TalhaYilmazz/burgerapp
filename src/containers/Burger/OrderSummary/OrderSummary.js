import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary'
import Button from '../../../components/UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(
        igkey => {
            return <li key={igkey}><span style={{textTransform: 'capitalize'}}>{igkey}</span>: {props.ingredients[igkey]}</li>
        }
    );
    return(
        <Auxiliary>
            <h3>Your order</h3>
            <p>A delicious burger with following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price is: {props.totalPrice.toFixed(2)} $</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Success" clicked={props.orderContinue}>CONTINUE</Button>
            <Button btnType="Danger" clicked={props.orderCancel}>CANCEL</Button>
        </Auxiliary>
    );
};

export default orderSummary;

