import React from 'react'
import classes from './Order.css'

const order = (props) => {
    let ingredients = [];
    for(let ingredientName in props.ingredients){
        ingredients.push(ingredientName + ": " + props.ingredients[ingredientName])
    }


    return(
        <div className={classes.Order}>
            <p>Ingredients:</p>
            {
                ingredients.map(ing => {
                    return <p style={{
                        textTransform: 'capitalize',
                        display: 'inline-block',
                        margin: '0 8px',
                        border: '1px solid #ccc',
                        padding: '5px'
                    }}>{ing} </p>
                })
            }
            <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    );
}

export default order;