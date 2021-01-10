import ButtonSmall from "./ButtonSmall.js";

function Guests({
  type,
  description,
  className,
  children,
  handleMinusButton,
  handlePlusButton,
}) {
  return (
    <div className={`${className} my-8 sm:ml-1/2`}>
      <h1 className="font-extrabold text-gray-800">{type}</h1>
      <span className="text-gray-400">{description}</span>
      <div className="mt-2">
        <ButtonSmall className="mr-2" onClick={handleMinusButton}>
          {" "}
          &#xFF0D;
        </ButtonSmall>
        <span>{children}</span>
        <ButtonSmall className="ml-2" onClick={handlePlusButton}>
          &#xFF0B;
        </ButtonSmall>
      </div>
    </div>
  );
}

export default Guests;
