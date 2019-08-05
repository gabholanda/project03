import React, { Component } from "react";
import Slider from "./NetflixSlider";
import { Link } from "react-router-dom";
import axios from "axios";

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = { movies: [{ id: "", title: "", image: "" }], events: [] };
  }

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

  componentDidMount() {
    this.getMovie();
  }

  render() {
    return (
      <div className=''>
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
    );
  }
}

export default Movies;
