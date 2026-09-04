import { useEffect, useState } from "react";
function APIFetch() {
    const [data, setData] = useState<any[]>([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/electronics")
            .then(response => response.json())
            .then(result => {
                setData(result);
            });
    }, []);
    return (
        <>
             {data.map((product) => (
                <h2 key={product.id}>{product.title}</h2>
            ))}
        </>
    );
}
export default APIFetch;



