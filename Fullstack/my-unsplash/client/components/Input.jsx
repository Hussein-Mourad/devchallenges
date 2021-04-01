import { useState } from "react";
export default function Input({
    type,
    className,
    placeholder,
    border,
    onChange,
    value,
    ...props
}) {
    if (border) {
        border = "border";
    }
    return (
        <input
            type={type}
            className={
                border +" "+
                "px-3 py-2 rounded-lg border-gray-300 text-gray-800 hover:border-gray-400 " + " "+
                className
            }
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...props}
        />
    );
}
