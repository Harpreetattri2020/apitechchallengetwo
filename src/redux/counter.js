import { createSlice } from '@reduxjs/toolkit'
import data from"../components/data.json";
const initialState = {
  count: 0,
  info:[...data],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      if(state.count < state.info.length -1)
      state.count += 1;
    },
        
    
    decrement: (state) => {
     if(state.count > 0)
      state.count -= 1;
      
    },
    clickon:(state,action)=>{
      state.count = action.payload;
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement,clickon  } = counterSlice.actions

export default counterSlice.reducer