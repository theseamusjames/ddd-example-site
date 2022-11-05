import * as React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import Button from "./Button";

export default function AddToCartButton({product}) {
    const dispatch = useDispatch();

    const _addToCart = () => {
        dispatch(addToCart(product));
    }

    return (
        <Button clickEvent={_addToCart} text="Add to Cart" type="primary" data-testid='addToCartButton' />
    );
}