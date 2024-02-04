import './Base.css';
import './ProductInfo.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import store from '../../store.js';
import { addToCart, updateCart } from '../../actions/cart-actions';

function ProductInfo() {

  const [product, setProduct] = useState('');
  const [discont_price, setDiscont_price] = useState('');
  const [price, setPrice] = useState('');
  const [price_class, setPrice_class] = useState('');
  const [percent, setPercent] = useState('');
  const { id } = useParams();
  var [count, setCount] = useState(1);
  const [buttonText, setButtonText] = useState("Add to cart");

  useEffect(() => {
    const rq = async() => {
      const response = await fetch(`http://localhost:3333/products/${id}`);
      const data = await response.json()
      data[0].image = "http://localhost:3333"+`${data[0].image}`

      const new_price = data[0].discont_price
      const old_price = data[0].price
      setProduct(data[0])
      setDiscont_price(data[0].discont_price)
      setPrice(data[0].price)
      setPercent(100 - Math.round((new_price * 100) / old_price))
      setPrice_class(new_price ? 'product-info-old-price' : 'product-info-price')

    }
    rq()
      
  }, [])

  // let unsubscribe = store.subscribe(() => {
  //   setCount(1)
  // });

  const handleClick = () => {
    setButtonText("Added")
    let productNotExist = store.getState().cart.find(x => x.id === product.id) === undefined
    if(productNotExist) {
        store.dispatch(addToCart(product.id, product.title, count, price, discont_price, product.image));
    } else {
        let currentCount = store.getState().cart.find(x => x.id === product.id).quantity
        store.dispatch(updateCart(product.id, product.title, currentCount + count, price, discont_price, product.image))
    }
    // unsubscribe()
}

  function decrement() {
    if(count <= 1) {
      return
    }
    setCount(--count)
  }

  function increment() {
    setCount(++count)
  }

  return (
    <div className="base">
      <Header />
      {product && (
        <div className='product-info-flex'>
          <img className='product-info-image' src={product.image}></img>
          <div className='product-info'>
            <a className='product-info-title'>{product.title}</a>
            <div className='product-info-price-flex'>
                    {discont_price && (
                        <a className='product-info-sale'>{discont_price}</a>
                    )}
                    <a className={price_class}>{price}</a>
                    {discont_price && (<div className='product-info-visibility'>
                        <div className='product-info-percent'>-{percent}%</div>
                    </div>
                    )}
            </div>
            <div className='product-info-count-flex'>
                  <div className='product-count-flex'>
                    <div onClick={decrement}>
                      <img src='/minus.svg' ></img>
                    </div>
                    
                    <div className='product-count'>{count}</div>
                    <div onClick={increment}>
                      <img src='/plus.svg' ></img>
                    </div>
                    
                  </div>
                  <div className='product-info-add-button' onClick={handleClick}>
                      <a className='product-info-add-button-text'>{buttonText}</a>
                  </div>
            </div>
            <a className='product-info-description'>Description</a>
            <a>{product.description}</a>
          </div>
        </div>
              
      )}
      <Footer />
    </div>
  );
}

export default ProductInfo;