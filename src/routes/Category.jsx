import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import "./Category.css";

export default function Category() {
    const params = useParams();
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        async function getProductData() {
            const response = await fetch('http://localhost:3000/products.json');
            const _products = JSON.parse(await response.text());
            setProducts(_products.filter(p => p.categories.includes(params.categoryName)));
        }
        getProductData();
    }, [params]);

    const items = products.map(p => (<ProductCard product={p} />));
    
    return (
        <section>
            <h2>{params.categoryName.toUpperCase()}</h2>
            <div className='productGallery'>
                {items}
            </div>
        </section>
    );
}