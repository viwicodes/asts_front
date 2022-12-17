import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        address: "",
        name : "",
        adm : "",
        dept : ""
    },
    reducers: {
        studentSignin: (state, action) => {
            //   state.address = action.payload.address
            state.address = action.payload.address
            state.name = action.payload.name
            state.adm = action.payload.adm
            state.dept = action.payload.dept
        },
        adminSignin: (state, action) => {
            //   state.address = action.payload.address
            state.address = action.payload.address
        },
    },
})

export const { studentSignin, adminSignin } = authSlice.actions

export default authSlice.reducer