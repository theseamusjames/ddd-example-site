import './App.css';
import { useEffect } from 'react';
import {Link, Outlet} from 'react-router-dom';
import {setProducts} from './redux/productSlice';
import {useDispatch} from 'react-redux';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
      async function getProductData() {
          const response = await fetch('http://localhost:3000/products.json');
          const _products = JSON.parse(await response.text());
          dispatch(setProducts(_products));
      }
      getProductData();
  }, [dispatch]);

  return (
    <div className="App">
      <header className="header">
        <ul>
          <li>
            <h1>Bridge & Glass</h1>
          </li>
          <li>
            <Link to="/category/mens">Mens</Link>
          </li>
          <li>
            <Link to="/category/womens">Womens</Link>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
