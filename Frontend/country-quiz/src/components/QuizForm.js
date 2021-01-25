import Icon from "@material-ui/core/Icon";
import uuid from "react-uuid";
import { useState } from "react";


function QuizForm({ question, choices }) {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const correctAnswer = question.capital;
  const handleButtonClick = (e) => {
    console.log(e.target);
    setBtnDisabled(true);
  };

  return (
    <div className="pt-5">
      <img className="w-28 rounded-md shadow-lg mb-3" src={""} alt="" />
      <h2 className="text-title text-xl font-medium mb-3">
        {question.name + "is the capital of (" + question.capital + ")"}
      </h2>
      {choices.map((choice, index) => (
        <button
          key={uuid()}
          className={`px-4 py-2 mb-6 w-full text-left text-lightpurple border border-lightpurple rounded-lg hover:text-white hover:border-btnhover hover:bg-btnhover transition duration-150 inline-flex items-center justify-between  focus:text-white disabled:cursor-not-allowed 
          ${
            choice === correctAnswer
              ? "focus:border-correct focus:bg-correct"
              : "focus:border-incorrect focus:bg-incorrect"
          } group`}
          onClick={handleButtonClick}
          disabled={btnDisabled}
        >
          <p>
            <span className="mr-8 uppercase font-medium">
              {String.fromCharCode(index + 65)}
            </span>
            {choice}
          </p>
          <Icon
            className="float-right text-white hidden group-focus:block"
            fontSize="small"
          >
            {choice === correctAnswer
              ? "check_circle_outline"
              : "highlight_off"}
          </Icon>
        </button>
      ))}

      <div className="relative w-full h-10">
        <button className="px-7 py-3 absolute right-0 text-white font-medium bg-btnhover rounded-lg  text-sm  hover:bg-opacity-90">
          Next
        </button>
      </div>
    </div>
  );
}

export default QuizForm;
