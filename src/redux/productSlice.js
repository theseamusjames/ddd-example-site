import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
            return state;
        }
    },
});

export const {setProducts} = productSlice.actions;
export default productSlice.reducer;