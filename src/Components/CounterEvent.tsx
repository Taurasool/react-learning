import { useState } from "react";
function CounterEvent(){

    const[counter, setCounter] = useState(0);

return (
    <>
    <h1>{counter}</h1>

    <button onClick={()=> setCounter(counter + 1)}>
        Increase
    </button>
    </>
)
}
export default CounterEvent;