import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(100);

    return (
        <>
        <h1>{count}</h1>

        <button onClick={()=> setCount(count + 1)}> Increase </button>

        <button onClick={()=> setCount(count - 1)}> Decrease </button>

        <button onClick={()=> setCount(100)}> Reset </button>
        </>
    );
}

export default Counter;