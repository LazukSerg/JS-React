import './Base.css';
import './NotFound.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function NotFound() {
  return (
    <div className="base">
      <Header />
      <p>Not Found</p>
      <Footer />
    </div>
  );
}

export default NotFound;