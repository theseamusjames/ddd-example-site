import "./Category.css";
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Api from '../services/api';


export default function Category() {
    const params = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function _loadProducts() {
            const _products = await Api.getProducts();
            setProducts( _products.filter(p => p.categories.includes(params.categoryName)) );
        }
        _loadProducts();
    }, [params]);

    const items = products.map(p => (<ProductCard product={p} key={p.id}/>));
    
    return (
        <section>
            <h2>{params.categoryName.toUpperCase()}</h2>
            <div className='productGallery'>
                {items}
            </div>
        </section>
    );
}