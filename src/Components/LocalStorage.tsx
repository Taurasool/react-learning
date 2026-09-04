import { useEffect, useState } from "react";

function LocalStorage() {

    const [name, setName] = useState("");

    useEffect(() => {
    localStorage.setItem("name", "Tauseef");
}, [name]);

    return (
        <>
            <input
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
            />

            <h2>{name}</h2>
        </>
    );
}

export default LocalStorage;