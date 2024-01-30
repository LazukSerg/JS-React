import './AllButton.css'
import { Link } from 'react-router-dom';

function AllButton(props) {
    return (
        <div className='all-btn'>
            <div className='all-button-line'></div>
            <Link className='all-button' to={`${props.link}`}>{props.text}</Link>
          </div>
    )
}

export default AllButton;