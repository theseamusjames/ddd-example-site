import { useDispatch } from 'react-redux';
import {removeFromCart} from '../redux/cartSlice';
import {X} from 'react-feather';

export default function CartItemsList({cart}) {
    const dispatch = useDispatch();

    const _removeItem = (index) => {
        dispatch(removeFromCart(index));
    }

    const items = cart.items.map((item, index) => {
        return (
            <div className='item' key={index} data-testid='cartItem'>
                <div className='image' style={{backgroundImage: `url(/assets/${item.images[0]})`}} />
                <div className='details'>
                    <div className='name'>
                        <label>Style</label>
                        <div>{item.name}</div>
                    </div>
                    <div className='price'>${item.price}</div>
                </div>
                <div className='removeItem' onClick={() => _removeItem(index)}>
                    <X />
                </div>
            </div>
        );
    });

    return (
        <div className='cartItems'>
            {items}
        </div>
    );
}