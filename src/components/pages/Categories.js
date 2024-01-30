import './Base.css';
import './Categories.css';
import Header from './../header/Header';
import Footer from './../footer/Footer';
import Category from '../Category';
import Name from '../Name';
import React, { useState, useEffect } from 'react';

function Categories() {
  const [data, setData] = useState('');

  useEffect(() => {
    const rq = async() => {
      const response = await fetch('http://localhost:3333/categories/all');
      const data = await response.json()
      const a = data.map(item => {
        item.image = "http://localhost:3333"+item.image
      })
      setData(data)
    }
    rq()
      
  }, [])

  const getCategories = categories => {
    let content = [];
    for (let i = 0; i < categories.length; i++) {
      const data = categories[i]
      content.push(<Category key={i} id={data.id} image={data.image} title={data.title}/>)
    }
    return content
  };

  return (
    <div className="base">
      <Header />
      <div className='all-categories-flex'>
        <div className='all-categories-head'>
          <Name name='Categories'/>
        </div>
      
        <div className='all-categories-list'>
          {data && (getCategories(data))}
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Categories;