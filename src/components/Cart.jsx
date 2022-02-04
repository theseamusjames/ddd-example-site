import './Cart.css';
import { useSelector } from 'react-redux';
import CartItemsList from './CartItemsList';
import CartTotals from './CartTotals';
import Button from './Button';
import {useNavigate} from 'react-router-dom';

export default function Cart() {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);

    const classes = ['cart'];
    if ( cart.visible ) 
        classes.push('show');

    return (
        <div className={classes.join(" ")}>
            <CartItemsList cart={cart}/>
            <CartTotals cart={cart} />
            <div className='checkoutButtonContainer'>
                <Button clickEvent={() => navigate('/checkout')} text="Checkout" type='primary' />
            </div>
        </div>
    );
}