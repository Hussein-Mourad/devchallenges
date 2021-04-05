import { useState } from "react";
export default function Input({ className, border, ...props }) {
  if (border) {
    border = "border";
  }
  return (
    <input
      className={
        border +
        " " +
        "px-3 py-2 rounded-2xl border-gray-300 text-gray-800 hover:border-gray-400 placeholder-gray-800 focus:outline-none " +
        " " +
        className
      }
      {...props}
    />
  );
}
