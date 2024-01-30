import './Category.css'
import { Link } from 'react-router-dom';

function Category(props) {
    return (
        <div className='category'>
            <Link to={`/category/${props.id}`}>
                <img className='category-img'  src= {props.image}/>
            </Link>
            <p className='category-text'>{props.title}</p>
        </div>
        
    )
}

export default Category;