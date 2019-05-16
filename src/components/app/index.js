import React from 'react';
import {Switch, Link, Route} from "react-router-dom";
import {HomePage, CartPage} from '../pages'

const App = () =>{
    return (
        <>
            <header>
                <Link to='/'>Home</Link>
                <Link to='/cart'>Cart</Link>
            </header>
            <Switch>
                <Route path='/' component={HomePage} exact />
                <Route path='/cart' component={CartPage} />
            </Switch>
        </>
    )
};

export default App;