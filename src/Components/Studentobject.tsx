import { useState } from "react";

function App() {

    const [student, setStudent] = useState({
        name: "Tauseef",
        age: 22,
        city: "Lucknow",
    });

    return (
        <>
            <h1>{student.name}</h1>
            <h2>{student.age}</h2>
            <h3>{student.city}</h3>

            <button
                onClick={() =>
                    setStudent({
                        ...student,
                        age: 23
                    })
                }
            >
                Update Age
            </button>
        </>
    );
}

export default App;