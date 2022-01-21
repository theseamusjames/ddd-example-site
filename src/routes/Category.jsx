import {useParams} from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import "./Category.css";
import { useSelector } from 'react-redux';

export default function Category() {
    const params = useParams();
    const allProducts = useSelector((state) => state.product.products);
    const products = allProducts.filter(p => p.categories.includes(params.categoryName))
 
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