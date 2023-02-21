import { createSlice } from '@reduxjs/toolkit';

const WrongSlice = createSlice({
            initialState:{
                  wrong: 0,
            },
            name:'wrongscore',
            reducers:{
                  wrongFunct: (state, {payload}) =>{
                        state = {wrong: state.wrong + payload}
                        return state;
                  }
            }
})
export const wrongScore = WrongSlice.reducer;
export const {wrongFunct} = WrongSlice.actions;