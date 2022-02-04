import App from '../App';
import Category from './Category';
import Product from './Product';
import Checkout from './Checkout';
import CheckoutSuccess from './CheckoutSuccess';
import Home from './Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index={true} element={<Home />} />
                    <Route path="category/:categoryName" element={<Category />} />
                    <Route path="product/:productId" element={<Product />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="checkout/success" element={<CheckoutSuccess />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}