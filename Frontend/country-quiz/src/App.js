import Card from "./components/Card";
import QuizForm from "./components/QuizForm";
import { useState, useEffect } from "react";
import getRandomArray from "./utils/getRandomArray";
import shuffle from "./utils/shuffle";
import getRandomObject from "./utils/getRandomObject";
import Loader from "react-loader-spinner";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [choices, setChoices] = useState([]);

  useEffect(() => {
    setData(null);
    setIsLoading(true);
    fetch("https://restcountries.eu/rest/v2/all?fields=name;capital;flag")
      .then((res) => {
        if (!res.ok) throw Error(`Oh no something went wrong!`);
        return res.json();
      })
      .then((data) => {
        setData(data);
        setQuestions(getRandomArray(data, 10));
        setCurrentQuestion(questions[questionNumber]);
        setTimeout(() => {
          setChoices(
            shuffle([
              { text: questions[0].capital, correct: true },
              { text: getRandomObject(data).capital, correct: false },
              { text: getRandomObject(data).capital, correct: false },
              { text: getRandomObject(data).capital, correct: false },
            ])
          );
          setError(null);
          setIsLoading(false);
        }, 1000);
      })
      .catch((err) => {
        // setIsLoading(false);
        // setError(err.message);
      });
    // eslint-disable-next-line
  }, []);
  console.log(choices);
  const nextQuestion = () => {
    setQuestionNumber(questionNumber + 1);
    setCurrentQuestion(questions[questionNumber]);
    setChoices(
      shuffle([
        { text: questions[questionNumber].capital, correct: true },
        { text: getRandomObject(data).capital, correct: false },
        { text: getRandomObject(data).capital, correct: false },
        { text: getRandomObject(data).capital, correct: false },
      ])
    );
    console.log("inside of next", choices);
  };
  const props = {
    question: currentQuestion,
    choices,
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
