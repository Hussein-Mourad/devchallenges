import { useState } from "react";
import Button from "./Button";


function QuizForm({ question, choices, nextQuestion, score, setScore }) {
  const [btnsDisabled, setBtnsDisabled] = useState(false);
  const [clicked, setClicked] = useState("");
  
  return (
    <div className="pt-5">
      <h2 className="text-title text-xl font-medium mb-3">
        {question &&
          question.capital + " is the capital of "}
      </h2>
      {choices.map((choice, index) => (
        <Button
          key={index}
          choice={choice}
          index={index}
          disabled={btnsDisabled}
          clicked={clicked}
          setClicked={setClicked}
          score={score}
          setScore={setScore}
          setBtnsDisabled={setBtnsDisabled}
          
        />
      ))}

      <div className="relative w-full h-10">
        <button
          className="px-7 py-3 absolute right-0 text-white font-medium bg-btnhover rounded-lg  text-sm disabled:cursor-not-allowed disabled:bg-opacity-50"
          onClick={() => {
            nextQuestion();
            setBtnsDisabled(false);
          }}
          disabled={!btnsDisabled}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default QuizForm;
