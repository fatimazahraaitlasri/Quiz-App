import React from 'react'
import QuestionData from "./quizzdata.json";

export default function QuizResult(props) {
  return (
    <div>
      <div className='bg-red   h-screen  gap-3 flex flex-col justify-center items-center'>
      <h2 className='text-white text-lg text-center font-normal'> Complete ! </h2>
      <h4 className='text-white text-lg text-center font-normal'> Total Score : {props.score}</h4>
      <h4 className='text-white text-lg text-center font-normal'> Your Correct question {props.CorrectAns} out of {QuestionData.results.length} </h4>
      <button onClick={props.handlePlayAgain} className='bg-white hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded'>  Play Again </button>
      </div>

    </div>
  )
}
