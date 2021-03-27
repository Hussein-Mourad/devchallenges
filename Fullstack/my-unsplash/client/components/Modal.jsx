import Input from "./Input";
import Button from "./Button";

export default function Modal({ className, children }) {
    return (
        <div className="fixed inset-0 h-screen w-screen bg-black bg-opacity-10 flex justify-center items-center">
            <div
                className={
                    "bg-white shadow-lg px-6 py-4 rounded-xl " + className
                }
            >
                {children}
            </div>
        </div>
    );
}
