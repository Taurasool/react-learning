import { useState } from "react";

function App() {

    const [fruits, setFruits] = useState(["Apple", "Mango"]);

    return (
        <>
            <h1>{fruits.join(", ")}</h1>

            <button onClick={() => setFruits([...fruits, "Banana"])}>
                Add Banana
            </button>
        </>
    );
}

export default App;