import Icon from "@material-ui/core/Icon";

function RandomButton({ className, onClick, isLoading }) {
  return (
    <button
      className={`text-gray-600 inline-flex items-center w-full justify-end hover:text-black focus:outline-none ${className}`}
      disabled={isLoading}
      onClick={onClick}
    >
      <span className="mr-2 text-xl">random</span>
      <Icon className={isLoading && "animate-spin"}> autorenew</Icon>
    </button>
  );
}

export default RandomButton;
