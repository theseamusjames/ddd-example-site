import {useSelector, useDispatch} from 'react-redux';
import {updateAddress} from '../redux/cartSlice';

export default function AddressPanel() {
    const dispatch = useDispatch();
    const address = useSelector((state) => state.cart.address);

    const _updateAddress = (event) => {
        dispatch(updateAddress({
            field: event.target.id,
            value: event.target.value,
        }));
    }

    return (
        <div className='addressPanel'>
            <h3>Billing/Shipping Address</h3>
            <fieldset>
                <label>Full Name</label>
                <input type='text' id='name' value={address.name} onChange={_updateAddress}/>

                <label>Street Address</label>
                <input type='text' id='street' value={address.street} onChange={_updateAddress}/>

                <label>City</label>
                <input type='text' id='city' value={address.city} onChange={_updateAddress}/>

                <label>State</label>
                <input type='text' id='state' value={address.state} onChange={_updateAddress}/>

                <label>Postcode</label>
                <input type='text' id='postcode' value={address.postcode} onChange={_updateAddress}/>

                <label>Country</label>
                <input type='text' id='country' value={address.country} onChange={_updateAddress}/>
            </fieldset>
        </div>
    );
}