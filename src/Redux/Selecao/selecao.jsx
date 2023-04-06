import {createSlice} from"@reduxjs/toolkit"

const initialState ={
    Bestseletter: false,
    LowHigh:false,
    HighLow: false
}


const Selecao = createSlice({
    name:'selecao',
    initialState,

    reducers:{
        Best_seletter: (state, action) =>{
            console.log(action.payload) 
        }
    }

})

export const {Best_seletter} = Selecao.actions
export default Selecao.reducer