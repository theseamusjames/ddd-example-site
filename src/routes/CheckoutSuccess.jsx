import './CheckoutSuccess.css';
import { useDispatch } from "react-redux";
import {clearCart} from '../redux/cartSlice';
import { useEffect, useState } from "react";

export default function CheckoutSuccess() {
    const dispatch = useDispatch();
    const [orderNumber, setOrderNumber] = useState('');

    useEffect(() => {
        dispatch(clearCart());
        
        // Just making up a very big fake order number
        setOrderNumber(Math.floor( Math.random() * 99999999999 ) + 1000000000); 
    }, [dispatch]);

    return (
        <div className='checkoutSuccess'>
            <h2>Thank you for your order!</h2>
            <div className='orderNumberContainer'>
                <div>
                    Your order number is
                </div>
                <div className='orderNumber'>
                    {orderNumber}
                </div>
            </div>
            <div className='followUp'>
                <div style={{fontSize: 100}}>📨</div>
                <div className='copy'>
                    You'll receive an email confirmation shortly. We'll send additional emails to update you on the status of your order when it ships. Need to contact customer service? Email <a href='mailto:support@bridgeandglass.com'>support@bridgeandglass.com</a>.
                </div>
            </div>
        </div>
    );
}