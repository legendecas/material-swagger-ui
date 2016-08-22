import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const reducers = {};

const store = createStore(
  combineReducers({ ...reducers }),
  applyMiddleware(
    thunk,
    createLogger()
  )
);

export default store;

