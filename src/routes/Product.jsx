import {useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import "./Product.css";

import Gallery from '../components/Gallery';

export default function Product() {
    const dispatch = useDispatch();

    const params = useParams();
    const products = useSelector((state) => state.product.products);
    if ( products.length === 0 ) 
        return (<></>);
        
    const product = products.find(p => p.id === parseInt(params.productId));

    const features = product.features.map((feature, index) => (<li key={index}>{feature}</li>));

    const _addToCart = () => {
        dispatch(addToCart(product));
    }

    return (
        <section className="product">
            <div className="leftColumn">
                <Gallery images={product.images} />
            </div>
            <div className="rightColumn">
                <h2>{product.name}</h2>
                <p>${product.price}</p>
                <div>
                    <button onClick={_addToCart}>Add to Cart</button>
                </div>
                <h3>Description</h3>
                <p>{product.description}</p>
                <h3>Features</h3>
                <ul>{features}</ul>
            </div>
        </section>
    );
}