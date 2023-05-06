'use client';

import { useState } from "react";

export default function Pets({ person }) {
    const [count, setCount] = useState(0)


    function handleClick() {
        setCount(count + 1)
    }

    return (
        <>
            <h3>He deserves pets <button onClick={handleClick}>Pet himb</button></h3>
            <p>{person.name} has been pet {count} times </p>
        </>
    )
}