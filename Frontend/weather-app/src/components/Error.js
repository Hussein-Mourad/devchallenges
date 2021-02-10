import { useState } from "react";

function Error({ timeout, children, className }) {
    const [wait, setWait] = useState(true);
    setTimeout(() => {
        setWait(false);
    }, timeout);
    return <h1 className={wait ? "hidden" : className}>{children}</h1>;
}

export default Error;
