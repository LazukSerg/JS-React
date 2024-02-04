import './Menu.css'
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <span className='menu'>
            <span >
                <Link className="main-page" to={`/`}>Main Page</Link>
            </span>
            <span >
                <Link className="categories" to={`/categories`}>Categories</Link>
            </span>
            <span >
                <Link className="all-products" to={`/all-products`}>All products</Link>
            </span>
            <span >
                <Link className="main-page" to={`/discount`}>All sales</Link>
            </span>
        </span>
        
    )
}

export default Menu;