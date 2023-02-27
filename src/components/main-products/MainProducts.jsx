import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Container from '../../utils/Container';
import { FiHeart } from "react-icons/fi";
import useFetchData from '../../hooks/useFetchData';
import "./MainProducts.scss";

const MainProducts = () => {
  const dispatch = useDispatch();
  const [data, isLoading] = useFetchData("https://api.escuelajs.co/api/v1/products?offset=10&limit=20");

  function trimDescription(str){
    return str.split(" ").slice(0, 10).join(" ") + "..."
  }

  function addToLike(product){
    dispatch({product, type: "LIKE_PRODUCT"})
  }

  return (
    <section className='main-products'>
        <h2 className="main-products__title">Premium E'lonlar</h2>
      <Container>
        <div className="main-products__wrapper">
          {!isLoading ?
            data.map(product => 
              <div className='product-item'  key={product.id}>
                <Link to={`/product/${product.id}`}>
                  {/* {
                    product.images?.at(0) && product.images?.at(0).starsWith("https//:") ?
                    <img src={product.images?.at(0)} alt="" />
                    :
                    <img src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg" alt="" />
                  } */}
                  <img className='product-item__img' src={product.images?.at(0)} alt="er" />
                  <h3> {product.title} </h3>
                </Link>
                <div className='product-item__info'>
                  <div>
                    <p> {trimDescription(product.description)} </p>
                    <strong> ${product.price} </strong>
                  </div>
                  <FiHeart onClick={() => addToLike (product)}/>
                </div>
              </div>  
            )
            :
            <p className='loading'>Loading...</p>
          }
        </div>
      </Container>
    </section>
  );
}

export default MainProducts;
