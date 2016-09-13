import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import configureStore from './store';
import { AppContainer } from 'react-hot-loader';

const store = configureStore(hashHistory),
      node  = document.getElementById('app');

const run = () => {

    const App = require('./app');

    render((
        <AppContainer>
            <App store={ store } history={ hashHistory }/>
        </AppContainer>
    ), node);
};

module.hot.accept('./app', run);

run();
