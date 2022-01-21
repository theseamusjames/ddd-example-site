import App from '../App';
import Category from './Category';
import Product from './Product';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="category/:categoryName" element={<Category />} />
                    <Route path="product/:productId" element={<Product />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}