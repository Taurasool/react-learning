import type { FormEvent } from "react";

function HandleSubmit() {

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        alert("Form submitted!");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                />

                <button type="submit">
                    Submit
                </button>
            </form>
        </>
    );
}

export default HandleSubmit;