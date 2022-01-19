import './App.css';
import {Link, Outlet} from 'react-router-dom';

function App() {
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
