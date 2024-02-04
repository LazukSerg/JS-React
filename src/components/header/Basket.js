import { Link } from 'react-router-dom';
import './Basket.css'

function Basket() {
    return (
        <div>
            <Link to={`/cart`}>
                <img src='/basket.svg' alt='basket'></img>
            </Link>
        </div>
    )
}

export default Basket;