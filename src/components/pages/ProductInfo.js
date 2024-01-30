import './Base.css';
import './ProductInfo.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductInfo(props) {

  const [product, setProduct] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const rq = async() => {
      const response = await fetch(`http://localhost:3333/products/${id}`);
      const data = await response.json()
      data[0].image = "http://localhost:3333"+`${data[0].image}`
      // data.map(item => {
      //   item.image = "http://localhost:3333"+item.image
      // })
      setProduct(data[0])
      console.log({product})
    }
    rq()
      
  }, [])

  // const getProducts = products => {
  //   let content = [];
  //   for (let i = 0; i < products.length; i++) {
  //     const data = products[i]
  //     content.push(<Product key={i} item={data}/>)
  //   }
  //   return content
  // };



  return (
    <div className="base">
      <Header />
      {/* <div> */}
      {product && (
        <div className='product-info-flex'>
          <img className='product-info-image' src={product.image}></img>
          <div className='product-info'>
            <a>{product.title}</a>
            <div> 
              price
            </div>
            <div>count</div>
            <p>{product.description}</p>
          </div>
        </div>
              
      )}
      
         {/* <div className='all-products-category-list'> */}
          
         {/* </div> */}

      {/* </div> */}
      <Footer />
    </div>
  );
}

export default ProductInfo;