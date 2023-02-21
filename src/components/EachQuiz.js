import React , {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import QuizSide from './QuizSide';
import examination from '../examination';
import { useDispatch, useSelector } from 'react-redux';
import { storequiz } from '../slices/QuizSlice';
import { correctFunct } from '../slices/CorrectSlice';
import { wrongFunct } from '../slices/WrongSlice';

const EachQuiz = () => {
      const corrState = useSelector(state => state.correctscore);
      const wrongState = useSelector(state => state.wrongscore);
      // const objState = useSelector(state =>state.quiz)
      const dispatch = useDispatch();
      const {id} = useParams();
      const [currentQuestions, setcurrentQuestions] = useState(0);
      const [value, setvalue] = useState()
      const [answer, setanswer] = useState()
      // const [right, setright] = useState(0)
      // const [left, setleft] = useState(0)
      const [index, setindex] = useState()
      const [selectedValue, setselectedValue] = useState('')
      const [selectedObj, setselectedObj] = useState({})
      const [selectedArr, setselectedArr] = useState([])


      // Function handling next question
      const nextQuest = () =>{
            setcurrentQuestions(currentQuestions + 1);
            dispatch(storequiz([selectedObj]));
            setselectedArr([...selectedArr, selectedObj]);
      }
      
      // Function handling finish test
      const finishTest = () =>{
            console.log("OOkay!");
      }

      // Function handling previous question
      const previousQues = () =>{
            setcurrentQuestions(currentQuestions - 1);
      }

      // Function handling userParams
      const handleIndex = () =>{
            setcurrentQuestions(id);
      }
      
      // Function handling radio values
      const handleRadioChange = (e, index, key, val) =>{
            const value = e.target.value;
            setvalue(value);
            setanswer(val.answer);
            setselectedValue(value);
            setindex(index)
            console.log(selectedValue);
            setselectedObj({...selectedObj, index, value, key});
            console.log(selectedObj);
           
            if(value === val.answer){
                  console.log("Correct");
                  console.log(value);
                  dispatch(correctFunct(1))
            }else if(value){
                  console.log("Wrong");
                  dispatch(wrongFunct(1))
            }
     
      }
  return (
    <>
      <div className="text grid md:grid-cols-2  w-full  overflow-hidden">
            <div className="text overflow-hidden w-full px-7  md:p-10 ">
                  {examination.map((val, index) => (
                        <>
                        <div className="text  " key={val.question}>
                              {index === currentQuestions?
                              <>
                              <div key={index} className="text w-full h-full">
                                    <div className="text">
                                          <div className="md:text-xl md:py-10 py-5 ">
                                                <div className="text-center md:hidden mb-4 text-3xl ">Question {index+1}/{examination.length} </div>
                                                <div className="text-start h-10 flex">
                                                       <div className="text">{index+1}.</div>
                                                       <div className="text mx-2"> {val.question}</div>
                                                </div>
                                          </div>
                                          <div className="text">
                                                <div className="text"></div>
                                                <button className="text py-3 ">
                                                      <input 
                                                      type="radio" 
                                                      key="A" 
                                                      name={`val${index}` }
                                                      value={val.A}
                                                      cheked = {selectedValue === " "? val.A: " "} 
                                                      onChange={(e) =>handleRadioChange(e, index, 'A', val)} 
                                                      className="text mx-4" />
                                                      <label  className="text"> A. {val.A}</label>
                                                </button>
                                                <div className="text">
                                                      <button className="text py-3 ">
                                                            <input 
                                                           type="radio" 
                                                           key="B" 
                                                           name={`val${index}` }
                                                           value={val.B}
                                                           cheked = {selectedValue === " "? val.B:" "} 
                                                           onChange={(e) =>handleRadioChange(e, index, 'B', val)}
                                                            className="text mx-4" />
                                                            <label  className="text">  B. {val.B}</label>
                                                      </button>

                                                </div>
                                                <div className="text">
                                                      <button className="text py-3 ">
                                                            <input 
                                                           type="radio" 
                                                           key="C" 
                                                           name={`val${index}` }
                                                           value={val.C}
                                                           cheked = {selectedValue === " "? val.C: " "} 
                                                           onChange={(e) =>handleRadioChange(e, index, 'C', val)}
                                                            className="text mx-4" />
                                                            <label  className="text">C. {val.C}</label>
                                                      </button>
                                                </div>
                                                <div className="text">
                                                      <button className="text py-3 ">
                                                            <input 
                                                           type="radio" 
                                                           key="D" 
                                                           name={`val${index}` }
                                                           value={val.D}
                                                           cheked = {selectedValue ===" "? val.D: " "} 
                                                           onChange={(e) =>handleRadioChange(e, index, 'D', val)}
                                                            className="text mx-4" />
                                                            <label  className="text">D. {val.D}</label>
                                                      </button>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="text md:hidden">
                                    <QuizSide handleIndex={handleIndex}  currentQuestions={currentQuestions} examination={examination} />
                                    </div>
                                    <div className="text  h-12 justify-between flex  mt-4 md:mt-80">
                                          {currentQuestions === 0? 
                                          <button className="text invisible bg-blue-700 md:w-1/3 lg:w-1/4 mx-auto px-8 py-1 text-center text-white rounded" onClick={previousQues}>
                                          <Link className="text px-8 py-1 mx-auto text-white rounded" to={`/questions/${index}`}>Previous</Link>
                                    </button>:
                                          <button className="text bg-blue-700 md:w-1/3 lg:w-1/4 mx-auto px-8 py-1 text-center text-white rounded" onClick={previousQues}>
                                                <Link className="text px-8 py-1 mx-auto text-white rounded" to={`/questions/${index}`}>Previous</Link>
                                          </button>
                                          }
                                          {currentQuestions === examination.length-1?
                                          <button className="text bg-green-700 md:w-1/3 lg:w-1/4 mx-auto px-5 py-1 text-center text-white rounded" onClick={finishTest}>
                                                <Link className="text px-8 py-1  mx-auto text-white rounded" to={`/result`}>Finish Test</Link>
                                          </button>:
                                          <button className="text bg-blue-700 md:w-1/3 lg:w-1/4 mx-auto px-8 py-1 text-center text-white rounded" onClick={nextQuest}>
                                          <Link className="text px-8 py-1  mx-auto text-white rounded" to={`/questions/${index + 2}`}>Next</Link>
                                    </button>
                                          }
                                    </div>

                              </div>
                              </>:
                              <span className='hidden'></span>
                              }
                        </div>
                        </>
                  ))}
                                          
                  {/* <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalSm" tabindex="-1" aria-labelledby="exampleModalSmLabel" aria-modal="true" role="dialog">
                  <div className="modal-dialog modal-sm relative w-auto pointer-events-none">
                  <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalSmLabel">
                        Small modal
                        </h5>
                        <button type="button"
                        className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                        data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body relative p-4">
                        ...
                        </div>
                  </div>
                  </div>
                  </div>

                  <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target={dataBsTarget}>Small modal</button> */}
            </div>
            <div className="text overflow-hidden relative  hidden md:grid">
                  <QuizSide handleIndex={handleIndex} currentQuestions={currentQuestions} examination={examination} />
            </div>
           
      </div>
    </>
  )
}

export default EachQuiz