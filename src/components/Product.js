import './Product.css'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Product(props) {
    const [visiableButton, setVisiableButton] = useState(false);
    const [buttonText, setButtonText] = useState("Add to cart");

    const discont_price = props.item.discont_price
    const price = props.item.price
    const price_class = discont_price ? 'old-price' : 'price'
    const percent = 100 - Math.round((discont_price * 100) / price)


    const handleClick = () => {
        setButtonText("Added")
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