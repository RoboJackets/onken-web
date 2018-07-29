import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { userReducer } from './layout/reducers';

const rootReducer = combineReducers({
  userReducer,
})
export default function initializeStore(initialState = {}) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk, logger))
}