import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import definition from './reducer/definition';

const reducers = { definition };

const store = createStore(
  combineReducers({ ...reducers }),
  applyMiddleware(
    thunk,
    createLogger()
  )
);

export default store;
