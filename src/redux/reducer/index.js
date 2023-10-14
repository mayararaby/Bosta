import * as bostaActions from "../actions"

const initialState = {
  packageInfo: {},
  local: 'ar',
  loading: false,
  trackingResult:true
}

export const bostaReducer = (state = initialState, action) => {
  const { payload, type } = action
  switch (type) {

    case bostaActions.SET_PACKAGE_INFO:
      return {
        ...state,
        packageInfo: payload
      }

    case bostaActions.SET_TRACKING_RESULT:
      return {
        ...state,
        trackingResult: payload
      }

    case bostaActions.SET_SELECTED_LOCAL:
      return {
        ...state,
        local: payload
      }

    case bostaActions.SET_LOADING:
      return {
        ...state,
        loading: payload
      }
    default:
      return state;
  }
}