import { actionTypes } from './actions';

const initialState = {
  tableData: [],
  loading: true,
  failed: false,
}

export const adminUserManagementReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_MANAGEMENT_LOAD_SUCCESS:
      return { ...state, loading: false, tableData: action.payload }
    case actionTypes.USER_MANAGEMENT_LOAD_FAIL:
      return { ...state, loading: false, failed: true }
    case actionTypes.USER_MANAGEMENT_ROW_EDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        tableData: state.tableData
          .map((item, index) => index === payload.index ? { ...item, role: payload.newRole } : item)
      }
    case actionTypes.USER_MANAGEMENT_ROW_EDIT_FAIL:
      return { ...state, loading: false, failed: true }
    case actionTypes.USER_MANAGEMENT_REQUEST:
      return { ...state, loading: true, failed: false }
    default:
      return initialState
  }
}