import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from 'src/routes';

export default ({store, history}) => (
    <Provider store={ store }>
        <Router history={ history }>
            { routes(store) }
        </Router>
    </Provider>
);
