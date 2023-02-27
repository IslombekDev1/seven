import React from 'react';
import "./Product.scss";
import { useParams } from 'react-router-dom';
import useFetchData from "../../hooks/useFetchData";
import Container from '../../utils/Container';

const Product = () => {
  const productIdData = useParams();
  const [data, isLoading] = useFetchData(`https://api.escuelajs.co/api/v1/products/${productIdData.id}`)
  console.log(data);
  return (
    <section className='single-product'>
      <Container>
        {!isLoading ?
          <div className='single-product__wrapper'>
            <div className='single-product__wrapper__img-wrapper'>
              {/* {
                data.images?.at(0) && data.images?.at(0).starsWith("https//:") ?
                <img src={data.images?.at(0)} alt="" />
                :
                <img src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg" alt="" />
              } */}
              <img src={data.images?.at(0)} alt="er" /> 
            </div>
            <div className='single-product__info'>
              <h1> {data.title} </h1>
              <p> {data.description} </p>
              <strong> ${data.price} </strong>
              <button className='link link--dark'>Add to cart</button>
            </div>
          </div>
          :
          <p>Loading...</p>
        }
      </Container>
    </section>
  );
}

export default Product;