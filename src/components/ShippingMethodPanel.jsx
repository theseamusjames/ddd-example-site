import * as React from 'react';
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
                <input id='standard' data-testid='shippingMethodRadio' type='radio' value='standard' onChange={_setShippingMethod} checked={shippingMethod === 'standard'}/> <label htmlFor='standard'>Standard 5-7 Business Days</label>
            </div>
            <div>
                <input id='express' data-testid='shippingMethodRadio' type='radio' value='express' onChange={_setShippingMethod} checked={shippingMethod === 'express'}/> <label htmlFor='express'>Express 1-2 Business Days</label>
            </div>
        </div>
    );
}