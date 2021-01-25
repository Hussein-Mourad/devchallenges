import { useState } from "react";
import Button from "./Button";


function QuizForm({ question, choices, nextQuestion }) {
  const [btnsDisabled, setBtnsDisabled] = useState(false);

  return (
    <div className="pt-5">
      <img className="w-28 rounded-md shadow-lg mb-3 " src={""} alt="" />
      <h2 className="text-title text-xl font-medium mb-3">
        {question &&
          question.name + " is the capital of (" + question.capital + ")"}
      </h2>
      {choices.map((choice, index) => (
        <Button
          key={index}
          choice={choice}
          index={index}
          disabled={btnsDisabled}
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
