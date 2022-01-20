import { configureStore } from '@reduxjs/toolkit';
import productReducer from './redux/productSlice';

export default configureStore({
    reducer: {
        product: productReducer,
    },
});