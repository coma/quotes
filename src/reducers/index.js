import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import quote from './quote';

export default combineReducers({
    routing,
    quote
});
