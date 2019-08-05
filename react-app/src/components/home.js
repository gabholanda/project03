import React, { Component } from "react";
import Slider from "./NetflixSlider";
import { Link } from "react-router-dom";
import axios from "axios";

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moviesHigh: [{ id: "", title: "", image: "" }],
      movies: [{ id: "", title: "", image: "" }],
      moviesSoon: [{ id: "", title: "", image: "" }]
    };
  }

  getMovieHigh = () => {
    axios
      .get(`http://localhost:5000/api/destaques`)
      .then(responseFromApi => {
        this.setState({
          moviesHigh: responseFromApi.data
        });
      })
      .catch(error => console.log(error));
  };

  getMovie = () => {
    axios
      .get(`http://localhost:5000/api/cartaz`)
      .then(responseFromApi => {
        this.setState({
          movies: responseFromApi.data
        });
      })
      .catch(error => console.log(error));
  };

  getMovieSoon = () => {
    axios
      .get(`http://localhost:5000/api/breve`)
      .then(responseFromApi => {
        this.setState({
          moviesSoon: responseFromApi.data
        });
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    this.getMovieHigh();
    this.getMovie();
    this.getMovieSoon();
  }

  render() {
    return (
      <div className=''>
        <div>
          <Slider>
            {this.state.moviesHigh.map(movie => (
              <Link to={`filme/${movie.id}`}>
                <Slider.Item movie={movie} key={movie.id}>
                  item1
                </Slider.Item>
              </Link>
            ))}
          </Slider>
        </div>
        <div>
          <Slider>
            {this.state.movies.map(movie => (
              <Link to={`filme/${movie.id}`}>
                <Slider.Item movie={movie} key={movie.id}>
                  item1
                </Slider.Item>
              </Link>
            ))}
          </Slider>
        </div>
        <div>
          <Slider>
            {this.state.moviesSoon.map(movie => (
              <Link to={`filme/${movie.id}`}>
                <Slider.Item movie={movie} key={movie.id}>
                  item1
                </Slider.Item>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Movies;
