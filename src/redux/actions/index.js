export const SET_PACKAGE_INFO ="SET_PACKAGE_INFO"
export const SET_SELECTED_LOCAL ="SET_SELECTED_LOCAL"
export const SET_LOADING = "SET_LOADING"
export const SET_TRACKING_RESULT ="SET_TRACKING_RESULT"

export const setTrackingResult = (payload)=>({
  type: SET_TRACKING_RESULT,
  payload
})

export const setLoading = (payload)=>({
  type: SET_LOADING,
  payload
})

export const setPackageInfo = (payload)=>({
  type: SET_PACKAGE_INFO,
  payload
})

export const setSelectedLocal = (payload)=>({
  type: SET_SELECTED_LOCAL,
  payload
})