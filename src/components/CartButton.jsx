import { useSelector, useDispatch } from 'react-redux';
import {toggleCart} from '../redux/cartSlice';
import {ShoppingCart} from 'react-feather';

export default function ShoppingCartMenu() {
    const dispatch = useDispatch();
    const cart = useSelector((store) => store.cart);

    const _toggleCart = () => {
        dispatch(toggleCart());
    }

    return (
        <div className="cartButton" onClick={_toggleCart} data-testid='cartButton'>
            <ShoppingCart size={30}/>
            {
                (cart.items.length > 0) ? (
                <div className="itemCount">
                    {cart.items.length}
                </div>
                ) : (
                <></>
                )
            }
        </div>
    );
}