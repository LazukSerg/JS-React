import './Menu.css'
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <span className='menu'>
            <span >
                <Link className="main-page" to={`/`}>Main Page</Link>
                {/* <a className="main-page" href="/home">Main Page</a> */}
            </span>
            <span >
                <Link className="categories" to={`/categories`}>Categories</Link>
                {/* <a className="categories" href="/home">Categories</a> */}
            </span>
            <span >
                <Link className="all-products" to={`/all-products`}>All products</Link>
                {/* <a className="all-products" href="/home">All products</a> */}
            </span>
            <span >
                <Link className="main-page" to={`/discount`}>All sales</Link>
                {/* <a className="main-page" href="/home">All sales</a> */}
            </span>
        </span>
        
    )
}

export default Menu;