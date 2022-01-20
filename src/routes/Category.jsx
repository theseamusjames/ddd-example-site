import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import "./Category.css";
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../redux/productSlice';

export default function Category() {
    const params = useParams();
    const products = useSelector((state) => state.product.products);
    const dispatch = useDispatch();
    
    useEffect(() => {
        async function getProductData() {
            const response = await fetch('http://localhost:3000/products.json');
            const _products = JSON.parse(await response.text());
            dispatch(setProducts(_products.filter(p => p.categories.includes(params.categoryName))));
        }
        getProductData();
    }, [params, dispatch]);

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