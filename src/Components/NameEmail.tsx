import { useState } from "react";

function NameEmail() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <>
            <h2>Name and Email</h2>

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

            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
        </>
    );
}

export default NameEmail;