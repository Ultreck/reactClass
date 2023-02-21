import { createSlice } from '@reduxjs/toolkit'

const QuizSlice =  createSlice({
      initialState:[],
      name:'quiz',
      reducers:{
            storequiz: (state, {payload}) =>{
                  state = [...state, ...payload]
                  return state;
            }
      }
})
export const quizReducer = QuizSlice.reducer;
export const {storequiz} = QuizSlice.actions;