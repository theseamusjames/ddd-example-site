import './App.css';
import { useEffect } from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {hideCart} from './redux/cartSlice';

// Components
import Cart from './components/Cart';
import Header from './components/Header';

function App() {
	const dispatch = useDispatch();
	const location = useLocation();
	const cart = useSelector((store) => store.cart);

	useEffect(() => {
		window.scrollTo(0,0);
		dispatch(hideCart());
	}, [location, dispatch]);

	const _hideCart = () => {
		if ( cart.visible )
			dispatch(hideCart());
	}

	return (
		<div className="App">
			<Header />
			<Cart />
			<main onClick={_hideCart}>
				<Outlet />
			</main>
		</div>
	);
}

export default App;
