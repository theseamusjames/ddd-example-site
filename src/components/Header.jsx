import "./header.css";
import {Link} from 'react-router-dom';
import CartButton from './CartButton';

export default function Header() {
	  return (
		<header className="header">
			<ul>
			<li>
				<h1><Link to="/">Bridge & Glass</Link></h1>
			</li>
			<li>
				<Link to="/category/mens" data-testid='headerMenu'>Mens</Link>
			</li>
			<li>
				<Link to="/category/womens" data-testid='headerMenu'>Womens</Link>
			</li>
			</ul>
			<CartButton />
		</header>
	  );
}