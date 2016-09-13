import { compose, createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import sagas from 'src/sagas';
import reducers from 'src/reducers';

module.exports = function (history, initialState = {}) {

    const sagaMiddleware = createSagaMiddleware(),
          devTools       = window.devToolsExtension ? window.devToolsExtension() : f => f;

    const a     = compose(applyMiddleware(sagaMiddleware), applyMiddleware(routerMiddleware(history)), devTools),
          c     = a(createStore),
          store = c(reducers, initialState);

    syncHistoryWithStore(history, store);

    if (module.hot) {

        module.hot.accept('src/reducers', () => store.replaceReducer(require('src/reducers').default));
    }

    sagaMiddleware.run(sagas);

    return store;
};
