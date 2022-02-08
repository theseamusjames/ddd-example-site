import './Checkout.css';
import CartItemsList from '../components/CartItemsList';
import CartTotals from '../components/CartTotals';
import { useSelector } from 'react-redux';
import AddressPanel from '../components/AddressPanel';
import ShippingMethodPanel from '../components/ShippingMethodPanel';
import CCFormPanel from '../components/CCFormPanel';
import Button from '../components/Button';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
    const navigate = useNavigate();
    const [activePanel, setActivePanel] = useState('address');
    const cart = useSelector((state) => state.cart);

    const _nextPanel = () => {
        if ( activePanel === 'address' ) 
            return setActivePanel('shippingMethod');
        
        if ( activePanel === 'shippingMethod' )
            return setActivePanel('ccForm');

        if ( activePanel === 'ccForm' )
            return navigate('/checkout/success');
    }

    const _getButtonText = () => {
        if ( activePanel === 'address' )
            return 'Next: Shipping Method';

        if ( activePanel === 'shippingMethod' )
            return 'Next: Payment';

        if ( activePanel === 'ccForm' )
            return 'Submit Order';
    }

    return (
        <div className='checkout'>
            <div className='leftColumn'>
                <h2>Checkout</h2>
                <AddressPanel />
                {
                    (activePanel === 'shippingMethod' || activePanel === 'ccForm') ?
                        (<ShippingMethodPanel />)
                    :
                        (<></>)

                }
                {
                    (activePanel  === 'ccForm') ?
                        (<CCFormPanel />)
                    :
                        (<></>)
                }
                <div className='nextButton'>
                    <Button clickEvent={() => _nextPanel()} type='primary' text={_getButtonText()} data-testid='checkoutNextButton'/>
                </div>
            </div>
            <div className='rightColumn'>
                <h2>Your Cart</h2>
                <CartItemsList cart={cart}/>
                <CartTotals cart={cart} />
            </div>
        </div>
    );
}