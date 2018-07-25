import { actionTypes } from './actions';

const initialState = {
  user: {},
  loading: true,
  failed: false,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOAD_SUCCESS:
      return { ...state, user: action.payload }
    default:
      return initialState
  }
}