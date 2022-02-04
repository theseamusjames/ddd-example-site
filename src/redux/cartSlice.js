import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    address: {
        name: '',
        street: '',
        city: '',
        state: '',
        postcode: '',
        country: '',
    },
    payment: {
        ccNumber: '',
        expiration: '',
    },
    shippingMethod: '',
    items: [],
    totals: {
        subtotal: 0,
        grandtotal: 0,
    },
    visible: false,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
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
        updateAddress: (state, action) => {
            const {field, value} = action.payload;
            state.address[field] = value;
            return state;
        },
        updateShippingMethod: (state, action) => {
            state.shippingMethod = action.payload;
            return state;
        },
        updatePaymentMethod: (state, action) => {
            const {field, value} = action.payload;
            state.payment[field] = value;
            return state;
        },
        clearCart: (state) => initialState,
    }
});

export const {addToCart, toggleCart, hideCart, removeFromCart, updateAddress, updateShippingMethod, updatePaymentMethod, clearCart} = cartSlice.actions;
export default cartSlice.reducer;