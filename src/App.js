import './App.css';
import { useEffect } from 'react';
import {Link, Outlet} from 'react-router-dom';
import {setProducts} from './redux/productSlice';
import {useSelector, useDispatch} from 'react-redux';
import Cart from './components/Cart';
import {toggleCart, hideCart} from './redux/cartSlice';
import {useLocation} from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const location = useLocation();

  useEffect(() => {
    dispatch(hideCart());
  }, [location, dispatch]);

  useEffect(() => {
      async function getProductData() {
          const response = await fetch('http://localhost:3000/products.json');
          const _products = JSON.parse(await response.text());
          dispatch(setProducts(_products));
      }
      getProductData();
  }, [dispatch]);

  const _toggleCart = () => {
    dispatch(toggleCart());
  }

  const _hideCart = () => {
    if ( cart.visible )
      dispatch(hideCart());
  }

  return (
    <div className="App">
      <header className="header" onClick={_hideCart}>
        <ul>
          <li>
            <h1><Link to="/">Bridge & Glass</Link></h1>
          </li>
          <li>
            <Link to="/category/mens">Mens</Link>
          </li>
          <li>
            <Link to="/category/womens">Womens</Link>
          </li>
        </ul>
        <div className="cartIcon" onClick={_toggleCart}>
          🛒
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
      </header>
      <Cart />
      <main onClick={_hideCart}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
