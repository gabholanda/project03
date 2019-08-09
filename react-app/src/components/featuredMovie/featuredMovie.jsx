import React from "react";
import { Link } from "react-router-dom";
import "./featuredMovie.css";


const FeaturedMovie = props => {
  const backgroundStyle =
  {
    backgroundImage:
      ` linear-gradient(0deg, rgba(0,0,0,0.8827906162464986) 0%, rgba(255,255,255,0) 90%),
        url(${props.image})`,
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    objectFit: "cover",
  }
  return (
    <div className='feature-movie-size'>
      <div className='featured-movie-bg' style={backgroundStyle}>

        <div className='featured-info'>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <Link to={props.way} className='featured-link' style={{ textDecoration: 'none' }} onClick={() => {
            if (props.getMovieId) {
              props.getMovieId(props.movieId);
            }
          }}>
            <img className='search-icon' src='../images/play.svg' alt="search-icon" />
            Veja mais
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FeaturedMovie;
