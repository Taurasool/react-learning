function AgeCheck() {

    let age = 27;

    return (
        <>
            {age >= 18 ? "You are Adult" : "You are Minor"}
        </>
    );
}

export default AgeCheck;
