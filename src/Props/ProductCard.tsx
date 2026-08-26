type ProductProps = {
    title: string;
    price: number;
    rating: number;
};

function ProductCard(Props: ProductProps) {
    return (
        <>
        <h1>{Props.title}</h1>
        <h2>{Props.price}</h2>
        <h3>{Props.rating}</h3>

        </>
    );
}

export default ProductCard;

