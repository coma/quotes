import { compose, createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import sagas from 'src/sagas';
import reducers from 'src/reducers';

export default (history, initialState = {}) => {

    const sagaMiddleware = createSagaMiddleware();

    const a     = compose(applyMiddleware(sagaMiddleware), applyMiddleware(routerMiddleware(history))),
          c     = a(createStore),
          store = c(reducers, initialState);

    syncHistoryWithStore(history, store);

    sagaMiddleware.run(sagas);

    return store;
};
