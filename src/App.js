import React, {Component} from 'react';
import Layout from './hoc/Layouts/Layout'
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Checkout from './containers/Checkout/Checkout'
import Orders from './containers/Orders/Orders'

class App extends Component {

    render(){
        return (
            <BrowserRouter>
                <div>
                    <Layout>
                        <Switch>
                            <Route path="/checkout" component={Checkout}></Route>
                            <Route path="/orders" component={Orders}></Route>
                            <Route path="/" component={BurgerBuilder}></Route>
                        </Switch>
                    </Layout>
                </div>
            </BrowserRouter>
        );
      }
}

export default App;
