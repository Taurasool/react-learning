import { useState } from "react";

function CounterPlusThree() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>{count}</h1>

            <button onClick={() => setCount(prev => prev + 3)}>
                +3
            </button>
        </>
    );
}

export default CounterPlusThree;