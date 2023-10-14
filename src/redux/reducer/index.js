import * as bostaActions from "../actions"

const initialState = {
  packageInfo: {},
  local: 'ar',
}

export const bostaReducer = (state = initialState, action) => {
  const { payload, type } = action
  switch (type) {
    case bostaActions.SET_PACKAGE_INFO:
      return {
        ...state,
        packageInfo: payload
      }

    case bostaActions.SET_SELECTED_LOCAL:
      return {
        ...state,
        local: payload
      }

    default:
      return state;
  }
}