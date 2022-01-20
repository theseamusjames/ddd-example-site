import "./ProductCard.css";

export default function ProductCard({product}) {
    return (
        <div className="productCard">
            <img src={`/assets/${product.images[0]}`} alt={product.name}/>
            <div className="productInfo">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
            </div>
        </div>
    );
}