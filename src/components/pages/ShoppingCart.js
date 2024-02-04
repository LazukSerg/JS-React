import './Base.css';
import './ShoppingCart.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Name from '../Name';
import AllButton from '../AllButton';
import { Link } from 'react-router-dom';
import store from '../../store.js';
import { addToCart, updateCart, deleteFromCart } from '../../actions/cart-actions';
import React, { useState, useEffect } from 'react';
import OrderForm from '../OrderForm.js';

function ShoppingCart() {

  const [data, setData] = useState(store.getState().cart);

    let unsubscribe = store.subscribe(() => {
        setData(store.getState().cart)
    });

  function decrement(item) {
    if(item.quantity <= 1) {
      return
    }
    store.dispatch(updateCart(item.id, item.title, item.quantity - 1, item.price, item.discont_price, item.image))
    unsubscribe()
  }

  const increment = (item) => {
    store.dispatch(updateCart(item.id, item.title, item.quantity + 1, item.price, item.discont_price, item.image))
    unsubscribe()
  }

  function deleteItem(id) {
    store.dispatch(deleteFromCart(id))
  }
  

  

  return (
    <div className="base">
      <Header />
      <div className='cart-flex'>
        <div className='cart-head'>
          <Name name='Shopping cart'/>
          <AllButton link='/all-products' text='Back to the store' />
        </div>
        {data.length === 0 && (
          <div>
            <p>Looks like you have no items in your basket currently.</p>
            <div className='cart-add-button'>
              <Link className='cart-add-button-text' to={`/all-products`}>Continue Shopping</Link>
            </div>
          </div>
          
        )}
        {data.length > 0 && (
          <div className='cart-content'> 
            <div className='cart-list'>
              {data.map((item, index) => {
                return (
                  <div className='cart-item'>
                    <img className='cart-item-image' src={item.image}/>
                    <div className='cart-item-content'>
                      <div className='item-content-h'>
                        <a className='item-content-title'>{item.title}</a>
                        <img className='item-content-del' src='/delete.svg' onClick={() => deleteItem(item.id)}/>
                      </div>
                      <div className='item-price-flex'>
                              

                        <div className='cart-item-count-flex'>
                          <div className='item-count-flex'>
                            <div onClick={() => decrement(item)}>
                              <img src='/minus.svg' ></img>
                            </div>
                      
                            <div className='item-count'>{item.quantity}</div>
                            <div onClick={() => increment(item)}>
                              <img src='/plus.svg' ></img>
                            </div>
                      
                          </div>
                        </div>

                        {item.discont_price && (
                          <a className='item-sale'>{item.discont_price}</a>
                        )}
                          <a className={item.discont_price ? 'item-old-price' : 'item-price'}>{item.price}</a>

                        {/* <div className='item-price-flex'>
                          {item.discont_price && (
                              <a className='item-sale'>{item.discont_price}</a>
                          )}
                          <a className={item.discont_price ? 'item-old-price' : 'item-price'}>{item.price}</a>
                        </div> */}





                      </div>
                    </div>

                  </div>
                )
              })}
            </div>
            <div>
              <OrderForm color='green'/>
            </div>
          </div>
          
        )}

      </div>
      <Footer />
    </div>
  );
}

export default ShoppingCart;