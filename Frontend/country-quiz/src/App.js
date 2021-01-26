import Card from "./components/Card";
import QuizForm from "./components/QuizForm";
import { useState, useEffect } from "react";
import getRandomArray from "./utils/getRandomArray";
import shuffle from "./utils/shuffle";
import getRandomObject from "./utils/getRandomObject";
import Loader from "react-loader-spinner";
import useFetch from "./api/useFetch";

function App() {
  const { data, isLoading, error, loadData } = useFetch(
    "https://restcountries.eu/rest/v2/all?fields=name;capital;flag"
  );
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  var choices;
  var currentQuestion;

  const nextQuestion = () => setQuestionNumber(questionNumber + 1);

  try {
    currentQuestion = data.questions[questionNumber];
    choices = shuffle([
      { text: currentQuestion.capital, correct: true },
      { text: getRandomObject(data.data).capital, correct: false },
      { text: getRandomObject(data.data).capital, correct: false },
      { text: getRandomObject(data.data).capital, correct: false },
    ]);
  } catch (e) {}

  console.log(score);
  const props = {
    question: currentQuestion,
    choices,
    score,
    setScore,
    nextQuestion,
  };

  return (
    <div className="container mx-auto flex justify-center items-center h-screen p-4">
      <Card>
        {error && <h1 className="text-red-500 text-center mt-10">{error}</h1>}
        {isLoading && !error && (
          <div className="flex justify-center items-center w-full h-80 bg-white">
            <Loader type="ThreeDots" color="#F9A826" height={50} width={50} />
          </div>
        )}
        {!isLoading && !error && <QuizForm {...props} />}
      </Card>
    </div>
  );
}

export default App;
