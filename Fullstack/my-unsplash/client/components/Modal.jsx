import Input from "./Input";
import Button from "./Button";

export default function Modal({ className, children, title, hidden }) {
    return (
        <div
            className={`fixed inset-0 h-screen w-screen bg-black bg-opacity-30 flex justify-center items-center ${
                hidden ? "hidden" : ""
            }`}
        >
            <div
                className={
                    "bg-white shadow-lg px-6 py-4 rounded-xl " + className
                }
            >
                <h2 className="text-gray-900 text-lg mb-5">{title}</h2>
                {children}
            </div>
        </div>
    );
}
