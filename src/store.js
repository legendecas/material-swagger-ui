import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import pinningTags from './reducer/pinningTags';

const reducers = { pinningTags };

const store = createStore(
  combineReducers({ ...reducers }),
  applyMiddleware(
    thunk,
    createLogger()
  )
);

export default store;

