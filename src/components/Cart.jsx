import './Cart.css';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';

// Components
import CartItemsList from './CartItemsList';
import CartTotals from './CartTotals';
import Button from './Button';

export default function Cart() {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);

    const classes = ['cart'];
    if ( cart.visible ) 
        classes.push('show');

    return (
        <div className={classes.join(" ")}>
            {
                (cart.items.length > 0) ?
                (
                    <div>
                        <CartItemsList cart={cart}/>
                        <CartTotals cart={cart} />
                        <div className='checkoutButtonContainer'>
                            <Button clickEvent={() => navigate('/checkout')} text="Checkout" type='primary' data-testid='checkoutButton' />
                        </div>
                    </div>
                ) : 
                (
                    <div className='emptyMessage'>
                        <h3>Your cart is empty</h3>
                    </div>
                )
            }
            
        </div>
    );
}