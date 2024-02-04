import './Product.css'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import store from '../store.js';
import { addToCart, updateCart } from '../actions/cart-actions';

function Product(props) {
    const [visiableButton, setVisiableButton] = useState(false);
    const [buttonText, setButtonText] = useState("Add to cart");

    const item = props.item
    const discont_price = props.item.discont_price
    const price = props.item.price
    const price_class = discont_price ? 'old-price' : 'price'
    const percent = 100 - Math.round((discont_price * 100) / price)


    
    const handleClick = () => {
        setButtonText("Added")
        // let unsubscribe = store.subscribe(() => {
        //     console.log(JSON.stringify(store.getState().cart))
        // });
        let productNotExist = store.getState().cart.find(x => x.id === item.id) === undefined
        if(productNotExist) {
            store.dispatch(addToCart(item.id, item.title, 1, price, discont_price, item.image));
        }

        
        // unsubscribe();
    }


    return (
        <div className='product' onMouseEnter={() => setVisiableButton(true)} onMouseLeave={() => setVisiableButton(false)}>
            <div className='image-container'>
                <Link to={`/product/${props.item.id}`}>
                    
                        <img className='product-img'  src= {props.item.image}/>
                        {discont_price && (
                        <div className='overlay'>
                            <div className='percent'>-{percent}%</div>
                        </div>
                        )}
                </Link>
                {visiableButton && (
                    <div className='overlay-button'>
                        <div className='add-button' onClick={handleClick}>
                            <a className='add-button-text'>{buttonText}</a>
                        </div>
                    </div >
                )}
            </div>
            <div className='product-info'>
                <a className='product-text'>{props.item.title}</a>
                <div className='price-flex'>
                    {discont_price && (
                        <a className='sale'>{discont_price}</a>
                    )}
                    <a className={price_class}>{price}</a>
                </div>
                
            </div>
            
        </div>
        
    )
}

export default Product;