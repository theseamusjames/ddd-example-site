import App from '../App';
import Category from './Category';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                <Route path="category/:categoryName" element={<Category />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}