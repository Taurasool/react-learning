import { useState } from "react";

function App() {
    const [name, setName] = useState("Tauseef");
    const [age, setAge] = useState(27);

    return (
        <>
            <h1>Name: {name}</h1>
            <h2>Age: {age}</h2>

            <button onClick={() => setAge(28)}>
                Update Age
            </button>
        </>
    );
}

export default App;