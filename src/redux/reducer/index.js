import * as bostaActions from "../actions"

const initialState= {
  packageInfo:{}
}

export const bostaReducer = (state = initialState, action)=>{
  const {payload, type} = action
  console.log("🚀 ~ file: index.js:9 ~ bostaReducer ~ action:", action)
  switch (type) {
    case bostaActions.SET_PACKAGE_INFO:
    console.log({action},"<= 1")
      return {
        ...state,
        packageInfo: payload
      }
  
    default:
      return state;
  }
}