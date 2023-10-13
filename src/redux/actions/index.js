export const SET_PACKAGE_INFO ="SET_PACKAGE_INFO"
export const SET_SELECTED_LOCAL ="SET_SELECTED_LOCAL"

export const setPackageInfo = (payload)=>({
  type: SET_PACKAGE_INFO,
  payload
})

export const setSelectedLocal = (payload)=>({
  type: SET_SELECTED_LOCAL,
  payload
})