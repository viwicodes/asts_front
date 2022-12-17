import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
    name: "admin",
    initialState: {
        address: '',
    },
    reducers: {
        admin: (state, action) => {
            state.address = action.payload.address
        }
    }
})

export const { admin } = adminSlice.actions

export default adminSlice.reducer