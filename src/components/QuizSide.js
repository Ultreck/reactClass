import React from 'react'

const QuizSide = ({examination, currentQuestions, handleIndex, radioValue}) => {
  return (
    <div>
       <div className="text md:p-20  border-l-2 mt-5 overflow-hidden">
                                    {examination.map((val, index) => (
                                            index === currentQuestions?
                                                <div key={index} className="text-center hidden md:grid  text-3xl mb-8">Question {index+1}/{examination.length} </div>: <span></span>
                                    ))}
                              <div className="text grid grid-cols-8 md:grid-cols-8 lg:grid-cols-12 mx-auto overflow-hidden">      
                                    {examination.map((val, index) => (
                                          <div key={index}>
                                                {index === currentQuestions?
                                                      <button className="text-white font-bold text-xl md:mx-1 border h-10 px-4 py-2 bg-green-500 scale-105 shadow-md z-30 rounded">{index+1}</button>: 
                                                      <>
                                                                  <button onClick={handleIndex} className="text mx-1 border h-10 px-4 py-2">{index+1 }</button>
                                                      </>
                                                }
                                          </div>
                                    ))}
                              </div>
            </div>
    </div>
  )
}

export default QuizSide
