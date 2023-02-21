import { createSlice } from "@reduxjs/toolkit";


const CorretSlice = createSlice({
      initialState:{
            correct:0,
      },
      name:"correctscore",
      reducers:{
            correctFunct: (state, {payload}) =>{
                  state = {correct: state.correct + payload}
                  return state;
            },
      }
})

export const correctScore = CorretSlice.reducer;
export const {correctFunct, wrongFunctt} = CorretSlice.actions;
