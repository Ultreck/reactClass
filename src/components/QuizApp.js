import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const QuizApp = ({examination}) =>{
      const [index, setindex] = useState()
      const [currentQuestions, setcurrentQuestions] = useState(0)
      // console.log(examination[0]);

      const nextQuest = () =>{
            setcurrentQuestions(currentQuestions + 1)
      }

      return(
            <>
            {/* <div className="text">
                  {examination[currentQuestions].question}
                  <Link className="text bg-blue-700 px-8 py-1 text-center text-white rounded" to={`/questions/${examination[currentQuestions]}`}>Submit</Link>
            </div> */}
                {/* {examination.map((val, index) => (
                  <>
                  <div className="text " key={index}>
                        {index === currentQuestions?
                        <>
                        <div className="text ">{index+1}. {val.question}</div>
                        <div className="text ">A. {val.A}</div>
                        <div className="text ">B. {val.B}</div>
                        <div className="text ">C. {val.C}</div>
                        <div className="text ">D. {val.D}</div>
                        <Link className="text bg-blue-700 px-8 py-1 text-center text-white rounded" to={`/questions/${index +1}`}>Next</Link>
                        </>:
                        <span className='hidden'>yoooo...</span>
                        }
                  </div>
                  </>
                ))} */}
                <div className="text text-center h-screen">
                        <h1 className="text">You want to test your IQ?</h1>
                        <p className="text">We got you cover</p>
                        <p className="text">Here are some IQ  qustions to test your abilities be it reasoning, thinking and forsight because all of our questions are Logical questions </p>
                        <p className="text">Therefore if you interested click 
                        <a href="##" className="text-blue-400 underline">  get Started</a> button below</p>
                        <button className="text bg-blue-700 w-1/2 md:w-1/4 mx-auto px-8 py-1 text-center text-white rounded" onClick={nextQuest}>
                        <Link className="text bg-blue-700 px-8 py-1 text-center text-white rounded" to={`/questions/:1`}>Get Started</Link>
                        </button>
                </div>
            </>
      )
}
export default QuizApp;