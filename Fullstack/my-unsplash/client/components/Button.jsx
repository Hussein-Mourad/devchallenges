export default function Button({
    className,
    children,
    color,
    onClick,
    ...props
}) {
    const getColor = () => {
        if (color === "primary") {
            return "bg-green-500 active:bg-green-600 text-white focus:ring focus:ring-green-200 disabled:bg-gray-500";
        } else if (color === "danger") {
            return "bg-red-500 active:bg-red-600 text-gray-100 focus:ring focus:ring-red-200 disabled:bg-gray-500";
        } else {
            return "text-gray-600 active:bg-gray-300 focus:bg-gray-200 disabled:bg-gray-200";
        }
    };
    return (
        <button
            className={
                "px-3 py-2 rounded-lg font-medium hover:opacity-95 focus:outline-none disabled:cursor-not-allowed" +
                " " +
                getColor() +
                " " +
                className
            }
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
}
