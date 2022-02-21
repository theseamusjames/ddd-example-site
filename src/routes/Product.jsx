import "./Product.css";
import {useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';
import Stars from '../components/Stars';
import AddToCartButton from "../components/AddToCartButton";

export default function Product() {

    const params = useParams();

    // Get our products from the state. These are pre-loaded in app.js
    const products = useSelector((state) => state.product.products);
    if ( products.length === 0 ) 
        return (<></>);
    
    // Find our specific product by ID
    const product = products.find(p => p.id === parseInt(params.productId));

    // Build our features list
    const features = product.features.map((feature, index) => (<li key={index}>{feature}</li>));

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
                        <AddToCartButton product={product} />
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