import Card from "./components/Card";
import QuizForm from "./components/QuizForm";
import { useState, useEffect } from "react";
import getRandomArray from "./utils/getRandomArray";
import shuffle from "./utils/shuffle";
import getRandomObject from "./utils/getRandomObject";
import Loader from "react-loader-spinner";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [question, setQuestion] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(0);
  // const [choices, setChoices] = useState(null);
  useEffect(() => {
    setData(null);
    setIsLoading(true);
    fetch(
      "https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;region;flag"
    )
      .then((res) => {
        if (!res.ok) throw Error(`Oh no something went wrong!`);

        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setData(getRandomArray(data, 10));
        setQuestion(data[questionNumber]);
        setError(null);
      })

      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, []);

  const choices = [
    question.capital,
    getRandomObject(data).capital,
    getRandomObject(data).capital,
    getRandomObject(data).capital,
  ];

  shuffle(choices);
  const props = { data, isLoading, error };
  return (
    <div className="container mx-auto flex justify-center items-center h-screen p-4">
      <Card>
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
