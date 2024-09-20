import notficationSlice from './reducers/notificationReducer'
import anecdoteSlice from './reducers/anecdoteReducer'
import filterSlice from './reducers/filterReducer'

import { configureStore } from '@reduxjs/toolkit'
const store = configureStore({
  reducer : {
    anecdotes:anecdoteSlice,
    filter: filterSlice,
    notification : notficationSlice 
  }
}) 

export default store
