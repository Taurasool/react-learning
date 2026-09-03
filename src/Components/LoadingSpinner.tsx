function LoadinSpinner() {

    let isLoadinSpinner = true;

    return (
        <>
            {isLoadinSpinner && "Loading..."}
        </>
    );
}

export default LoadinSpinner;