import * as testData from '../test-data.json';

export const actionTypes = {
  USER_MANAGEMENT_LOAD_SUCCESS: 'LOAD_USER_MANAGEMENT_SUCCESS',
  USER_MANAGEMENT_LOAD_FAIL: 'LOAD_USER_MANAGEMENT_FAIL',
  USER_MANAGEMENT_ROW_EDIT_SUCCESS: 'EDIT_ROW_SUCCESS',
  USER_MANAGEMENT_ROW_EDIT_FAIL: 'EDIT_ROW_FAIL',
  USER_MANAGEMENT_REQUEST: 'NEW_REQUEST',
}

export const actions = {
  fetchData: () => dispatch => {
    dispatch({ type: actionTypes.USER_MANAGEMENT_REQUEST })
    return dispatch({ type: actionTypes.USER_MANAGEMENT_LOAD_SUCCESS, payload: testData })
  },
  editRow: (index, newRole) => dispatch => {
    dispatch({ type: actionTypes.USER_MANAGEMENT_REQUEST })
    return dispatch({ type: USER_MANAGEMENT_ROW_EDIT_SUCCESS, payload: { index: index, newRole: newRole } })
  }
}