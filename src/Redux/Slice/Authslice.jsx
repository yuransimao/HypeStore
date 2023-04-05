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
           
            state.isLoggedIn = true
            const {email, userName,  userID,userPHOTO } = action.payload
            state.email = email
            state.userName = userName
            state.userID = userID
            state.userPHOTO = userPHOTO
        },
        REMOVE_ACTIVE_USER: (state, action) => {
            
            state.isLoggedIn = false
            state.email = null
            state.userName = null
            state.userID = null
            state.userPHOTO = null
        }
    }
})

export const  { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } = authSlice.actions;

export const selectIsloggedIn = (state) => state.auth.isLoggedIn
export const selectEmail = (state) => state.auth.email
export const selectUserName = (state) => state.auth.username
export const selectUserID = (state) => state.auth.userID
export const selectUserPhoto = (state) => state.auth.userPHOTO

export default authSlice.reducer