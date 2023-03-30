import React, { useState } from "react";
import QuestionData from "./quizzdata.json";
import QuizResult from "./QuizResult";
export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [CorrectAns, setCorrectAns] = useState(0);
  const [showResult, setShowResult] = useState(0);
  const [Clicked, setClicked] = useState();

  const handleNextOptions = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < QuestionData.results.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
    setClicked(false); // Set Clicked state to false when moving to the next question
  };

  const handelAnswerOption = () => {
    let Score = score + 5;
    let correctAns = CorrectAns + 1;
    setScore(Score);
    setCorrectAns(correctAns);
    setClicked(true);
  };
  const handlePlayAgain = () => {
    setCurrentQuestion(0);
    setScore(0);
    setCorrectAns(0);
    setShowResult(false);
  };
  return (
    <div className="bg-black   h-screen flex justify-center items-center">
      {showResult ? (
        <QuizResult
          score={score}
          CorrectAns={CorrectAns}
          handlePlayAgain={handlePlayAgain}
        />
      ) : (
        <>
          <div className="bg-white p-3 h-5/5 w-1/2 rounded-md shadow-2xl  justify-center items-center">
            {Clicked ? <h5 className=" text-lg text-black text-center font-normal"> Answered </h5> : <h5 className=" text-lg text-black text-center font-normal"> Answer </h5>}
            <div>
              <span className="text-lg text-black text-center font-semibold">
                Question {currentQuestion + 1} / {QuestionData.results.length}{" "}
              </span>
            </div>
            <div className="m-6  text-lg text-black text-center font-normal ">{QuestionData.results[currentQuestion].question}</div>
            <div className="flex flex-col gap-2 ">
              <button
                onClick={handelAnswerOption}
                className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"
              >
                {QuestionData.results[currentQuestion].correct_answer}
              </button>
              {QuestionData.results[currentQuestion].incorrect_answers.map(
                (ins, i) => {
                  return (
                    <button
                      key={i}
                      className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"
                    >
                      {ins}
                    </button>
                  );
                }
              )}

              <button
                onClick={handlePlayAgain}
                className=" mt-10 bg-black hover:bg-black text-white font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"
              >
                
                quiter
              </button>
              <button
                onClick={handleNextOptions}
                className="bg-black hover:bg-black text-white font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"
              >
               
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
