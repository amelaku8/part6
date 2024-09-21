import { createSlice } from "@reduxjs/toolkit";

const initialState = null 
const notificationSlice = createSlice({

  name : "notification",
  initialState,
  reducers : {
    setNotify : (state,action) => {
      return action.payload
    },
    clear : (state,action) => {
      return null
    }
  } 
})
export const notify= (message,time) => {
  return async dispatch => {
    dispatch(notificationSlice.actions.setNotify(message))
    setTimeout(() => dispatch (notificationSlice.actions.clear()),time)
  }
}
export default notificationSlice.reducer
