import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import {withRouter} from 'react-router-dom'

const Burger = (props) => {

    let ingredientsArray = Object.keys(props.ingredients)
        .map(ingredientName => {
            return [...Array(props.ingredients[ingredientName])].map((_,idx) => {
                return <BurgerIngredient key={ingredientName+idx} type={ingredientName}></BurgerIngredient>;
            });
        }).reduce((arr,el) => {
            return arr.concat(el)
        }, []);

    if(ingredientsArray.length === 0){
        ingredientsArray =  <p>Please add an item</p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type={'BreadTop'}></BurgerIngredient>
            {ingredientsArray}
            <BurgerIngredient type={'BreadBottom'}></BurgerIngredient>
        </div>
    );
};

export default withRouter(Burger);