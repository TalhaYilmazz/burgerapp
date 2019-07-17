import React, {Component} from 'react'
import Auxiliary from '../Auxiliary'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import classes from './Layout.css'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component{
    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    menuClickedHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    };

    render(){
      return(
          <Auxiliary>
              <div>
                  <Toolbar menuClicked={this.menuClickedHandler}/>
                  <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
              </div>
              <main className={classes.Content}>
                  {this.props.children}
              </main>
          </Auxiliary>
      );
  }
};

export default Layout;