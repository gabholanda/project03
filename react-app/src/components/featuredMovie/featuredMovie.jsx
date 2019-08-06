import React from "react";
import { Link } from "react-router-dom";
import "./featuredMovie.css";

const FeaturedMovie = props => {
  return (
    <div>
      <div className='featured-movie-bg'>
        <img
          className='featured-image'
          src={props.image}
          alt='movies'
        />
        <div className='featured-info'>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <Link to={props.way} className='featured-link'>
            <img className='search-icon' src='../images/play.svg' />
            Veja mais
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FeaturedMovie;
