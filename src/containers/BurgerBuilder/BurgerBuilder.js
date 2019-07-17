import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './BurgerBuilder.css';
import Burger from '../Burger/Burger';
import BuildControls from '../Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {Route} from 'react-router-dom'
import * as actionTypes from '../../store/actions'
import {connect} from 'react-redux'

class BurgerBuilder extends Component{

    state = {
        purchasing: false,
        loading: false,
        error: false
    };

    purchaseHandler = () => {
        this.setState({purchasing: true});
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    };

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout')
    };

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).
            map(igkey => {
                return ingredients[igkey];
        }).reduce((sum,el)=>{
            return sum + el;
        },0);

        return  sum > 0
    };

    // componentWillMount() {
    //     axios.get('/ingredients.json').
    //         then(response => {
    //             this.setState({ingredients: response.data})
    //     }).catch(error=>{
    //         this.setState({error: true})
    //     })
    // }

    render(){
        const disabledInfo = {
            ...this.props.ings
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }


        let orderSummary = null;

        let burger = this.state.error? <p>Burger can't be retrieved</p> : <Spinner/>;

        if(this.state.loading) {
            orderSummary = (<Spinner/>);
        }

        if(this.props.ings){
            orderSummary = (<OrderSummary
                ingredients={this.props.ings}
                orderContinue={this.purchaseContinueHandler}
                orderCancel={this.purchaseCancelHandler}
                totalPrice={this.props.price}/>);
            burger = (
                <Auxiliary>
                    <Burger ingredients={this.props.ings}/>
                    <BuildControls
                        addIngredient={this.props.onIngredientAdded}
                        removeIngredient={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        price={this.props.price.toFixed(2)}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchaseHandler}/>
                </Auxiliary>);

        }

        if(this.state.loading) {
            orderSummary = (<Spinner/>);
        }

        return(
            <Auxiliary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Auxiliary>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));