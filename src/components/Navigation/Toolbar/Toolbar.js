import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Menu from '../Menu/Menu'

const toolbar = (props) => (

    <header className={classes.Toolbar}>
        <div>
            <Menu clicked={props.menuClicked}/>
        </div>
        <div className={classes.Logo}>
            <Logo></Logo>
        </div>
        <nav>
            <NavigationItems/>
        </nav>
    </header>

);

export default toolbar;