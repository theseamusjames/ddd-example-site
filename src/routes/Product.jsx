import "./Product.css";
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';

// Components
import Api from '../services/api';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';
import Stars from '../components/Stars';
import AddToCartButton from "../components/AddToCartButton";

export default function Product() {
    const params = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        async function _loadProduct() {
            const product = await Api.getProduct(parseInt(params.productId));
            setProduct( product );
        }
        _loadProduct();
    }, [params]);

    if ( !product ) 
        return (<></>);

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