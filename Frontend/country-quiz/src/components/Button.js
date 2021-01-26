import Icon from "@material-ui/core/Icon";

function Button({
  choice,
  index,
  disabled,
  setBtnsDisabled,
  clicked,
  setClicked,
  score,
  setScore,
}) {
  const handleClick = (e) => {
    setClicked(index);
    setBtnsDisabled(true);
    if (choice.correct) {
      e.target.className =
        "px-4 py-2 mb-6 w-full text-left text-white border border-correct bg-correct rounded-lg transition duration-150 inline-flex items-center justify-between disabled:cursor-not-allowed";
      setScore(score + 1);
    } else {
      e.target.className =
        "px-4 py-2 mb-6 w-full text-left text-white border border-incorrect bg-incorrect rounded-lg transition duration-150 inline-flex items-center justify-between disabled:cursor-not-allowed";
    }
  };

  const btnStyle = () => {
    var style =
      "px-4 py-2 mb-6 w-full text-left text-lightpurple bg-white border border-lightpurple rounded-lg transition duration-150 inline-flex items-center justify-between disabled:cursor-not-allowed hover:text-white hover:border-btnhover hover:bg-btnhover";
    if (disabled) {
      style =
        "px-4 py-2 mb-6 w-full text-left text-lightpurple border border-lightpurple rounded-lg transition duration-150 inline-flex items-center justify-between disabled:cursor-not-allowed";
      if (choice.correct)
        style =
          "px-4 py-2 mb-6 w-full text-left text-white bg-correct border border-correct rounded-lg transition duration-150 inline-flex items-center justify-between disabled:cursor-not-allowed";
      else if (clicked === index && !choice.correct)
        style =
          "px-4 py-2 mb-6 w-full text-left text-white bg-incorrect border border-incorrect rounded-lg transition duration-150 inline-flex items-center justify-between disabled:cursor-not-allowed";
    }

    return style;
  };

  const iconStyle = () => {
    var style = "float-right text-white hidden";
    if (disabled) style = "float-right text-white";

    return style;
  };
  return (
    <button
      className={btnStyle()}
      onClick={(e) => {
        handleClick(e);
      }}
      disabled={disabled}
    >
      <p>
        <span className="mr-8 uppercase font-medium">
          {String.fromCharCode(index + 65)}
        </span>
        {choice.text}
      </p>
      <Icon className={iconStyle()} fontSize="small">
        {choice.correct ? "check_circle_outline" : "highlight_off"}
      </Icon>
    </button>
  );
}

export default Button;
