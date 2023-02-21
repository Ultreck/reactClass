import { configureStore } from '@reduxjs/toolkit'
import { correctScore } from './slices/CorrectSlice';
import { quizReducer } from './slices/QuizSlice'
import { wrongScore } from './slices/WrongSlice';

const store = configureStore({
      reducer:{
            quiz: quizReducer,
            correctscore: correctScore,
            wrongscore: wrongScore,
      }
})
export default store;