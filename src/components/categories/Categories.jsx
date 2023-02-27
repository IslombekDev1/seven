import React from "react";
import Container from "../../utils/Container";
import { Link } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import "./Categories.scss";


const Categories = () => {
  const [data, isLoading] = useFetchData("https://api.escuelajs.co/api/v1/categories");
  
  return (
    <section className="categories">
        <h2 className="categories__title">Bosh toifalar</h2>
      <Container>
        <div className="categories__wrapper">
          {!isLoading ?
            data.map(category =>
              <Link to={`/category/${category.id}`} className="category__item" key={category.id}>
                <div className="category__img-wrapper">
                    <img className="category__img" src={category.image} alt="category__img" />
                </div>
                  <h3> {category.name} </h3>
              </Link>
            )
            :
            <p>Loading...</p>
          }
        </div>
      </Container>
    </section>
  );
};

export default Categories;
