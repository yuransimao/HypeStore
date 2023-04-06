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
            
             
            const { Besttoseletter} = action.payload

            if(Besttoseletter === 'Best seletter-0' ){
            state.Bestseletter = true

                console.log('0k')
            }
        }
    }

})

export const {Best_seletter} = Selecao.actions
export default Selecao.reducer