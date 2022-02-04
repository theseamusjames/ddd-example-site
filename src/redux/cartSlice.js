import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totals: {
            subtotal: 0,
            grandtotal: 0,
        },
        visible: false,
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
            state.totals.subtotal += action.payload.price;
            state.totals.grandtotal += action.payload.price;
            return state;
        },
        toggleCart: (state) => {
            state.visible = (state.visible) ? false : true;
            return state;
        },
        hideCart: (state) => {
            state.visible = false;
            return state;
        },
        removeFromCart: (state, action) => {
            const item = state.items[action.payload];
            state.totals.grandtotal -= item.price;
            state.totals.subtotal -= item.price;
            state.items = [...state.items.slice(0, action.payload), ...state.items.slice(action.payload + 1, state.items.length)];
            return state;
        },
    }
});

export const {addToCart, toggleCart, hideCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;