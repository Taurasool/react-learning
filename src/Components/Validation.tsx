import { useState } from "react";

function RegistrationForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(event: React.FormEvent) {

        event.preventDefault();

        if (name === "") {
            alert("Please enter your name");
            return;
        }

        if (email === "") {
            alert("Please enter your email");
            return;
        }

        alert("Registration successful");
    }

    return (
        <>
            <h2>Registration Form</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br /><br />

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Register
                </button>

            </form>
        </>
    );
}

export default RegistrationForm;