import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import {removeFromCart} from '../redux/cartSlice';

export default function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const classes = ['cart'];
    if ( cart.visible ) 
        classes.push('show');

    const _removeItem = (index) => {
        dispatch(removeFromCart(index));
    }

    const items = cart.items.map((item, index) => {
        return (
            <div className='item' key={index}>
                <div className='image' style={{backgroundImage: `url(/assets/${item.images[0]})`}} />
                <div className='details'>
                    <div className='name'>
                        <label>Style</label>
                        <div>{item.name}</div>
                    </div>
                    <div className='price'>${item.price}</div>
                </div>
                <div className='removeItem' onClick={() => _removeItem(index)}>
                    ❌
                </div>
            </div>
        );
    });

    return (
        <div className={classes.join(" ")}>
            {items}
            <ul className='totals'>
                <li>
                    <label>Subtotal</label>
                    <span>${cart.totals.subtotal}</span>
                </li>
                <li className='grandTotal'>
                    <label>Grand total</label>
                    <span>${cart.totals.grandtotal}</span>
                </li>
            </ul>
        </div>
    );
}