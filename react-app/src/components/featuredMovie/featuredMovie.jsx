import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedMovie.css";

const FeaturedMovie = props => {
  return (
    <div>
      <div className='featured-movie-bg'>
        <img
          className='featured-image'
          src='../images/featured_movie.jpg'
          alt='movies'
        />
        <div className='featured-info'>
          <h1>Título do filme</h1>
          <p>Descrição do filme e do evento em pelo menos 100 caracteres.</p>
          <Link to='#' className='featured-link'>
            <img className='search-icon' src='../images/play.svg' />
            Veja mais
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FeaturedMovie;
