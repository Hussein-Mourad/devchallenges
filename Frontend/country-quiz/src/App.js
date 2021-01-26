import Card from "./components/Card";
import { useState } from "react";
import shuffle from "./utils/shuffle";
import getRandomObject from "./utils/getRandomObject";
import Loader from "react-loader-spinner";
import useFetch from "./api/useFetch";
import Footer from './components/Footer';

function App() {
  const { data, isLoading, error, loadData } = useFetch(
    "https://restcountries.eu/rest/v2/all?fields=name;capital;"
  );
  const [questionNumber, setQuestionNumber] = useState(0);
  var choices;
  var currentQuestion;

  const nextQuestion = () => setQuestionNumber(questionNumber + 1);
  const resetGame = () => {
    loadData();
    setQuestionNumber(0);
  };
  try {
    currentQuestion = data.questions[questionNumber];
    choices = shuffle([
      { text: currentQuestion.name, correct: true },
      { text: getRandomObject(data.data).name, correct: false },
      { text: getRandomObject(data.data).name, correct: false },
      { text: getRandomObject(data.data).name, correct: false },
    ]);
  } catch (e) {}
  const props = {
    question: currentQuestion,
    choices,
    questionNumber,
    nextQuestion,
    isLoading,
    error,
    resetGame,
  };

  return (
    <div className="container mx-auto flex justify-center items-center h-screen p-4 relative">
      <Card {...props}>
        {error && <h1 className="text-red-500 text-center mt-10">{error}</h1>}
        {isLoading && !error && (
          <div className="flex justify-center items-center w-full h-80 bg-white">
            <Loader type="ThreeDots" color="#F9A826" height={50} width={50} />
          </div>
        )}
      </Card>
      <Footer className="absolute bottom-0"/>
    </div>
  );
}

export default App;
