import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
    email: null,
    userName: null,
    userID: null,
    userPHOTO:null
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        SET_ACTIVE_USER: (state, action) => {
            console.log(action.payload)
        },
    },
})

export const  { SET_ACTIVE_USER } = authSlice.actions;

export const selectIsloggedIn = (state) => state.auth.isLoggedIn
export const selectEmail = (state) => state.auth.email
export const selectUserName = (state) => state.auth.username
export const selectUserID = (state) => state.auth.userID
export const selectUserPhoto = (state) => state.auth.userPHOTO

export default authSlice.reducer