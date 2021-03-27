export default function Button({ className, children, color, onClick }) {
    const getColor = () => {
        if (color === "primary") {
            return "bg-green-500 active:bg-green-600 text-white focus:ring focus:ring-green-200 ";
        } else if (color === "danger") {
            return "bg-red-500 active:bg-red-600 text-gray-100 focus:ring focus:ring-red-200 ";
        } else {
            return "text-gray-600 focus:ring-2 focus:ring-gray-500 ";
        }
    };
    return (
        <button
            className={
                "px-3 py-2 rounded-lg font-medium hover:opacity-95 focus:outline-none " +
                getColor() +
                className
            }
            onClick={onClick}
        >
            {children}
        </button>
    );
}
