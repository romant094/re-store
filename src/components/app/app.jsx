import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Home, Cart} from '../pages';

const App = () => {
    return (
        <Switch>
            <Route path='/' exact render={() => <Home />} />
            <Route path='/cart' render={() => <Cart />} />
        </Switch>
    );
};

export {App};
