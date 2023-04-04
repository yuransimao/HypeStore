import {configureStore, combineReducers} from "@reduxjs/toolkit"
import AuthReducer from "./Slice/Authslice"

const rootReducer = combineReducers({
    auth : AuthReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store