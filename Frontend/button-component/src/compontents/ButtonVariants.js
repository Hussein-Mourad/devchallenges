import Button from "./Button.js";
import { capitalizeFirstLetter, btns } from "../helper.js";
import uuid from "react-uuid";

const ButtonVariants = ({ className }) => {
  return (
    <div className={className}>
      <h1 className="text-3xl text-gray-700 ml-5">All Possible Variants:</h1>
      <div className="grid grid-cols-2 md:grid-cols-3">
        {btns.map((btn) => (
          <div key={uuid()} className="m-5 max-w-max">
            <h1
              key={uuid()}
              className={`font-medium text-lg mb-3 text-${btn.color}`}
            >
              {`${capitalizeFirstLetter(btn.variant)}-${btn.size}`}
            </h1>
            <Button
              key={uuid()}
              variant={btn.variant}
              color={btn.color}
              shadow={btn.shadow}
              size={btn.size}
              startIcon={btn.startIcon}
              endIcon={btn.endIcon}
              disabled={btn.disabled}
            >
              {btn.color}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonVariants;
