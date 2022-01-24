import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totals: {
            subtotal: 0,
            grandtotal: 0,
        },
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
            state.totals.subtotal += action.payload.price;
            state.totals.grandtotal += action.payload.price;
            return state;
        }
    }
});

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;