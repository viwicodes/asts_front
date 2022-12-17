import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Slices/loginSlice'
import studentReducer from './Slices/studentSlice'
import eventReducer from './Slices/eventSlice'
import adminReducer from './Slices/adminSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    student : studentReducer,
    event : eventReducer,
    admin : adminReducer
  },
})