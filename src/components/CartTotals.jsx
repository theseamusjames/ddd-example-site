import * as React from 'react';
export default function CartTotals({cart}) {
    return (
        <div className='cartTotals'>
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