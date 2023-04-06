import {configureStore, combineReducers} from "@reduxjs/toolkit"
import AuthReducer from "./Slice/Authslice"
import Selecao from "./Selecao/selecao"

const rootReducer = combineReducers({
    auth : AuthReducer,
    selecao: Selecao
})

const store = configureStore({
    reducer: rootReducer
})

export default store