import './Base.css';
import './ProductsCategory.css';
import Header from './../header/Header';
import Footer from './../footer/Footer';
import Name from '../Name';
import Product from '../Product';
import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

function ProductsCategory() {

  const [products, setProducts] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const rq = async() => {
      const response = await fetch(`http://localhost:3333/categories/${id}`);
      const data = await response.json()
      data.data.map(item => {
        item.image = "http://localhost:3333"+item.image
      })
      setProducts(data)
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
      <div className='all-products-category-flex'>
        <div className='all-products-category-head'>
          {products && (<Name name={products.category.title}/>)}
        </div>

      
        <div className='all-products-category-list'>
          {products.data && (getProducts(products.data))}
        </div>

      </div>
      <Footer />
    </div>
  );
}
export default ProductsCategory;