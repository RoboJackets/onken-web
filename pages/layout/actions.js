import fetch from 'isomorphic-unfetch';
import { BASE_URL, resHandler } from '../fetch-base';
import * as user from './test-user.json';

export const actionTypes = {
  USER_LOAD_SUCCESS: 'LOAD_USER_SUCCESS',
  USER_LOAD_FAIL: 'LOAD_USER_FAIL',
}

const actions = {
  fetchUser: () => dispatch => {
    return dispatch({ type: actionTypes.USER_LOAD_SUCCESS, payload: user });
  }
}

export function fetchUser() {
  return (dispatch) => dispatch({ type: actionTypes.USER_LOAD_SUCCESS, payload: user });
}

export default actions;
