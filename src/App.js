import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import QuizApp from './components/QuizApp';
import QuizQuestions from './components/QuizQuestions';
import EachQuiz from './components/EachQuiz';
import examination from './examination';
import Result from './components/Result';

function App() {
  return (
 <>
    <NavBar/>
 <Routes>
      {/* <Route path='questions/:id' element={<QuizQuestions/>} /> */}
    <Route path='/' element={<QuizApp examination={examination}/>}/>
    <Route path='/result' element={<Result examination={examination}/>}/>
    <Route path='/questions/:id' element={<EachQuiz/>}/>


 </Routes>
 </>
  );
}

export default App;
