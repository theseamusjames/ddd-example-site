import {useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import Button from '../components/Button';
import "./Product.css";
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';
import Stars from '../components/Stars';

export default function Product() {
    const dispatch = useDispatch();
    const params = useParams();

    // Get our products from the state. These are pre-loaded in app.js
    const products = useSelector((state) => state.product.products);
    if ( products.length === 0 ) 
        return (<></>);
    
    // Find our specific product by ID
    const product = products.find(p => p.id === parseInt(params.productId));

    // Build our features list
    const features = product.features.map((feature, index) => (<li key={index}>{feature}</li>));

    const _addToCart = () => {
        dispatch(addToCart(product));
    }

    return ( 
        <section className="product">
            <div className='columns'>
                <div className="leftColumn">
                    <Gallery images={product.images} />
                </div>
                <div className="rightColumn">
                    <h2>{product.name}</h2>
                    <a href='#reviews'><Stars rating={product.rating} /></a>
                    <p>${product.price}</p>
                    <div>
                        <Button clickEvent={_addToCart} text="Add to Cart" type="primary" data-testid='addToCartButton' />
                    </div>
                    <h3>Description</h3>
                    <p>{product.description}</p>
                    <h3>Features</h3>
                    <ul>{features}</ul>
                </div>
            </div>
            <Reviews product={product} />
        </section>
    );
}