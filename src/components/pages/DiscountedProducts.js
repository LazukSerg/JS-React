import './Base.css';
import './DiscountedProducts.css';
import Header from './../header/Header';
import Footer from './../footer/Footer';
import Product from '../Product';
import Name from '../Name';
// import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function DiscountedProducts() {
  const [data, setData] = useState('');

  useEffect(() => {
    const rq = async() => {
      const response = await fetch('http://localhost:3333/products/all');
      const data = await response.json()
      data.map(item => {
        item.image = "http://localhost:3333"+item.image
      })
      const filtered = data.filter(function (item) {
        return item.discont_price
      })
      setData(filtered)
    }
    rq()
      
  }, [])

  const getProducts = products => {
    let content = [];
    for (let i = 0; i < products.length; i++) {
      const data = products[i]
      content.push(<Product key={i} item={data}/>)
    }
    return content
  };



  return (
    <div className="base">
      <Header />
      <div className='all-products-flex'>
        <div className='all-products-head'>
          <Name name='Discounted items'/>
        </div>

      
        <div className='all-products-list'>
          {data && (getProducts(data))}
        </div>

      </div>
      <Footer />
    </div>
  );
}
export default DiscountedProducts;