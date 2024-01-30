import './Base.css';
import './ShoppingCart.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function ShoppingCart() {
  return (
    <div className="base">
      <Header />
      <p>Shopping Cart</p>
      <Footer />
    </div>
  );
}

export default ShoppingCart;