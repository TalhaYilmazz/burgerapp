import React, {Component} from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import {Route} from 'react-router-dom'
import ContactData from './ContactData/ContactData'
import {connect} from 'react-redux'

class Checkout extends Component{

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    };

    render(){
        return(
            <div>
                <CheckoutSummary
                    ingredients={this.props.ings}
                    cancelClick={this.checkoutCancelHandler}
                    continueClick={this.checkoutContinueHandler}/>
                <Route
                    path={this.props.match.path + '/contact-data'}
                    component={ContactData}/>
            </div>
        );
    }

};

const mapStateToProps = (state) => {
    return {
        ings: state.ingredients
    }
};

export default connect(mapStateToProps)(Checkout);