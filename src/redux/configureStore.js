import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import stockReducer from './stock/stock';

const reducer = combineReducers({
  stockReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));
export default store;
