import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { userReducer } from './layout/reducers';
import { adminUserManagementReducer } from './admin/user-management/reducers';

const rootReducer = combineReducers({
  userReducer,
  adminUserManagementReducer,
})
export default function initializeStore(initialState = {}) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk, logger))
}