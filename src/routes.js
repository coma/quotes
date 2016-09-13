import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './view';
import Game from './view/game';

export default store => (
    <Route component={ App } path="/">
        <IndexRoute component={ Game }/>
    </Route>
);
