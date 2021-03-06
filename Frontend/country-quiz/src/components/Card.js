import globeImg from "../assets/undraw_adventure_4hum 1.svg";
import winners from "../assets/undraw_winners_ao2o 2.svg";
import QuizForm from "./QuizForm";
import { useState } from "react";

function Card({
  className,
  children,
  isLoading,
  error,
  question,
  choices,
  nextQuestion,
  questionNumber,
  resetGame,
}) {
  const [score, setScore] = useState(0);
  const props = {
    question,
    choices,
    score,
    setScore,
    nextQuestion,
    isLoading,
    error,
  };

  return (
    <div className={`${className}`}>
      <h1 className="text-lightgray text-2xl sm:sm:text-3xl font-semibold uppercase mb-3">
        country quiz
      </h1>
      <div className="rounded-2xl bg-white relative px-6 py-6 w-72 min-h-96 sm:w-96">
        <img
          src={globeImg}
          alt="globeImg"
          className="absolute -top-16 right-0 w-4/12"
        />
        {children}
        {!isLoading && !error && questionNumber < 9 && <QuizForm {...props} />}

        {questionNumber === 9 && (
          <div className="w-full text-center text-result">
            <img src={winners} alt="winners" className="w-3/5 mx-auto mb-14" />
            <h2 className="font-bold text-4xl mb-2">Results</h2>
            <p>
              You got
              <span className="text-correct text-3xl font-bold mx-1">
                {score + 1}
              </span>
              correct answer
            </p>
            <button
              className="px-12 py-2 my-1 border-2 border-result rounded-lg mt-14 hover:bg-result hover:text-white focus:bg-result focus:text-white"
              onClick={() => {
                resetGame();
                setScore(0);
              }}
            >
              Try again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
