import './Base.css';
import './Home.css';
import Header from './../header/Header';
import Footer from './../footer/Footer';
import Name from '../Name';
import Category from '../Category';
import AllButton from '../AllButton';
import Form from '../Form';
import Product from '../Product';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Home() {

  const [categories, setCategories] = useState('');
  const [sales, setSales] = useState('');

  

  useEffect(() => {
    const rq = async() => {
      const response = await fetch('http://localhost:3333/categories/all');
      const data = await response.json()
      const a = data.map(item => {
        item.image = "http://localhost:3333"+item.image
      })
      setCategories(data)
    }
    rq()
      
  }, [])

  const getCategories = categories => {
    let content = [];
    for (let i = 0; i < 4; i++) {
      const data = categories[i]
      content.push(<Category key={i} id={data.id} image={data.image} title={data.title}/>)
    }
    return content
  };


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
      setSales(filtered)
    }
    rq()
      
  }, [])

  const getProducts = products => {
    let content = [];
    for (let i = 0; i < 4; i++) {
      const data = products[i]
      content.push(<Product key={i} item={data}/>)
    }
    return content
  };

  return (
    <div className="base">
      <Header />

      <div style={{backgroundImage: "url(/home-head-1920-2.png)" }} className='head'>
        <div className='banner'>
          <a className='banner-text'>Amazing Discounts on<br/>Garden Products!</a>
          <button className='banner-button '>
            <Link className='banner-button-text' to={`/discount`}>Check out</Link>
          </button>
        </div>
      </div>

      <div className='categories-flex'>
        <div className='categories-head'>
          <Name name='Categories'/>
          <AllButton link='/categories' text='All Categories' />
        </div>

        <div className='categories-list'>
          {categories && (getCategories(categories))}
        </div>
      </div>

      <div className='discount-banner'>
          <a className='discount-text'>5% off on the first order</a>
          <div className='discount-content'>
            <img className='discount-image' src='/discount-banner.svg'></img>
            <Form color='white'/>
          </div>
      </div>

      <div className='sales-flex'>
        <div className='sales-head'>
          <Name name='Sale'/>
          <AllButton link='/discount' text='All Sales' />
        </div>

        <div className='sales-list'>
          {sales && (getProducts(sales))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Home;