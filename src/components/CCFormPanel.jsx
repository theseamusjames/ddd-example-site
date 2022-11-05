import * as React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { updatePaymentMethod } from '../redux/cartSlice';

export default function CCFormPanel() {
    const dispatch = useDispatch();
    const payment = useSelector((state) => state.cart.payment);

    const _updatePayment = (event) => {
        dispatch(updatePaymentMethod({
            field: event.target.id,
            value: event.target.value,
        }))
    }

    return (
        <div className='ccFormPanel'>
            <h3>Enter payment</h3>
            <fieldset>
                <label>Credit Card Number</label>
                <input type='text' id='ccNumber' onChange={_updatePayment} value={payment.ccNumber} />

                <label>Expiration Date</label>
                <input type='text' id='expiration' onChange={_updatePayment} value={payment.expiration} />
            </fieldset>
        </div>
    );
}