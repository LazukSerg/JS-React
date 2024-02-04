import './Base.css';
import './NotFound.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="base">
      <Header />
      <div className='not-found-flex'>
        <img src='/not-found.svg'/>
        <h1 className='not-found-head'>Page Not Found</h1>
        <a className='not-found-text'>We’re sorry, the page you requested could not be found.<br/>
          Please go back to the homepage.</a>
        <div className='not-found-back-button'>
          <Link className='not-found-back-button-text' to={`/`}>Go Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;