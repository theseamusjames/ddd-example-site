import "./ProductCard.css";
import {Link} from 'react-router-dom';

export default function ProductCard({product}) {
    return (
        <div className="productCard">
            <Link to={`/product/${product.id}`} data-testid="productCard">
                <img src={`/assets/${product.images[0]}`} alt={product.name}/>
                <div className="productInfo">
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                </div>
            </Link>
        </div>
    );
}