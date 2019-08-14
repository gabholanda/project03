import React from "react";
import { Link } from "react-router-dom";
import Slider from "../NetflixSlider";

const Movies = (props) => {
  return (<Slider>
    {props.movies.map(movie => (
      <Link
        to={`filme/${movie.id}`}
        onClick={() => {
          if (props.getMovieId) {
            props.getMovieId(movie.id);
          }
        }}
        key={movie.id}
      >
        <Slider.Item movie={movie} key={movie.id}>
          item1
                </Slider.Item>
      </Link>
    ))}
  </Slider>)
}

export default Movies;