import React from 'react'
import { useSelector } from 'react-redux'
import examination from '../examination';

const Result = () => {
  // const quizState = useSelector(state => state.quiz);
  const correctState = useSelector(state => state.correctscore);
  const wrongState = useSelector(state => state.wrongscore);
  // let uniqurSelectedArr = quizState.filter((items, index, self) => self.indexOf(items) === index);
  // console.log(uniqurSelectedArr);
  // console.log(examination);
  return (
    <div>
      <div className="text w-full px-5 md:w-1/2 my-auto mt-40 mx-auto">
        <h1 className="text-center text-xl md:text-3xl py-4">Score Board</h1>
      <table class="border-separate border border-slate-400 w-full border-spacing-2">
                <tr className="text">
                  <th class="border border-slate-300 py-5 px-5 text-start">Total Questions</th>
                  <td class="border border-slate-300 py-5  px-5  text-center">{examination.length}</td>
                </tr>
                <tr className="text">
                    <th class="border border-slate-300 py-5  px-5  text-start">Questions Attended</th>
                    <td class="border border-slate-300 py-5  px-5  text-center">{(correctState.correct + wrongState.wrong)}</td>
                </tr>
                <tr className="text">
                   <th class="border border-slate-300 py-5  px-5  text-start">Correct Answer</th>
                  <td class="border border-slate-300 py-5  px-5  text-center">{correctState.correct}</td>
                </tr>
                <tr className="text">
                  <th class="border border-slate-300 py-5  px-5  text-start">Wrong Answer</th>
                  <td class="border border-slate-300 py-5  px-5  text-center">{wrongState.wrong}</td>
                </tr>
                <tr>
                  <th class="border border-slate-300 py-5  px-5  text-start">Average Score</th>
                  <td class="border border-slate-300 py-5  px-5  text-center">{correctState.correct/50 *examination.length}%</td>
                </tr>
        </table>
      </div>
    </div>
  )
}

export default Result
