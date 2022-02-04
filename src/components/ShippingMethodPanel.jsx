import {useSelector, useDispatch} from 'react-redux';
import {updateShippingMethod} from '../redux/cartSlice';

export default function ShippingMethodPanel() {
    const dispatch = useDispatch();
    const shippingMethod = useSelector((state) => state.cart.shippingMethod);

    const _setShippingMethod = (event) => {
        dispatch(updateShippingMethod(event.target.value))
    }

    return (
        <div className='shippingMethodPanel'>
            <h3>Select Shipping Method</h3>
            <div>
                <input id='standard' type='radio' value='standard' onClick={_setShippingMethod} checked={shippingMethod === 'standard'}/> <label for='standard'>Standard 5-7 Business Days</label>
            </div>
            <div>
                <input id='express' type='radio' value='express' onClick={_setShippingMethod} checked={shippingMethod === 'express'}/> <label for='express'>Express 1-2 Business Days</label>
            </div>
        </div>
    );
}