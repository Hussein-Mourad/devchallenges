import Button from "./Button";
import Input from "./Input";
import { useState } from "react";

export default function NavBar({ className, onBtnClick, setSearchTerm }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
const [value, setValue] = useState("")
    return (
        <header className={className}>
            <nav className="py-4 flex justify-between ">
                <div className="flex">
                    <img src="/my_unsplash_logo.svg" alt="logo" lazy="true" />

                    <div className="border border-gray-300 rounded-md hidden sm:inline-flex items-center relative ml-2">
                        <i className="w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </i>

                        <Input
                            type="text"
                            placeholder="Search by name"
                            className="pl-11"
                            value={value}
                            onChange={(e) => {
                                setValue(e.target.value);
                            }}
                            onKeyPress={(e) => {
                                if (e.key === "Enter" || e.keyCode === 13) {
                                    setSearchTerm(value)
                                }
                            }}
                        />
                    </div>
                </div>

                <Button
                    className="hidden sm:block"
                    color="primary"
                    onClick={onBtnClick}
                >
                    Add a photo
                </Button>
                <div className="sm:hidden">
                    <button
                        className="w-7 focus:outline-none"
                        onClick={() => {
                            setIsMenuOpen((isMenuOpen) => {
                                return !isMenuOpen;
                            });
                        }}
                    >
                        <svg
                            className={`w-7 cursor-pointer ${
                                isMenuOpen ? "hidden" : ""
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        <svg
                            className={`w-7 cursor-pointer ${
                                isMenuOpen ? "" : "hidden"
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </nav>
            <nav
                className={`sm:hidden shadow-md p-5 w-full ${
                    isMenuOpen ? "" : "hidden"
                }`}
            >
                <div className="border border-gray-300 rounded-md inline-flex items-center relative w-full">
                    <i className="w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </i>

                    <Input
                        type="text"
                        placeholder="Search by name"
                        className="pl-11 w-full"
                    />
                </div>
                <div className="flex justify-end">
                    <Button
                        className="block my-5 "
                        color="primary"
                        onClick={onBtnClick}
                    >
                        Add a photo
                    </Button>
                </div>
            </nav>
        </header>
    );
}
