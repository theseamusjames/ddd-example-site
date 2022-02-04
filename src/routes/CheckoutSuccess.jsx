import { useDispatch } from "react-redux";
import {clearCart} from '../redux/cartSlice';
import { useEffect } from "react";

export default function CheckoutSuccess() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearCart());
    }, [dispatch]);

    return (
        <div className='checkoutSuccess'>
            <h2>Success!</h2>
        </div>
    );
}