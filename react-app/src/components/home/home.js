import React, { Component } from "react";
import Slider from "../NetflixSlider";
import { Link } from "react-router-dom";
import axios from "axios";
import "./home.css";
import "../featuredMovie/featuredMovie";
import FeaturedMovie from "../featuredMovie/featuredMovie";
import Footer from "../footer/footer";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesHigh: [
        {
          id: "",
          title: "",
          image: "",
          poster: "",
          trailer: "",
          description: ""
        }
      ],
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
      <div>
        {/* <div className='main-movie'>
          <img src={this.state.moviesHigh[0].poster}/>
          <h1>{this.state.moviesHigh[0].title}</h1>
          <p>{this.state.moviesHigh[0].description}</p>this.props.getMovieId
          <Link to={`filme/${this.state.moviesHigh[0].id}`}>
            <button>Veja mais</button>
          </Link>         
        </div> */}
        <FeaturedMovie
          title={this.state.moviesHigh[0].title}
          // description={this.state.moviesHigh[0].description}
          image={this.state.moviesHigh[0].poster}
          way={`filme/${this.state.moviesHigh[0].id}`}
        />
        <div className='destaques'>
          <div className='movie-title-section'>
            <h2 className='home-destaques'>Destaques</h2>
          </div>
          <Slider>
            {this.state.moviesHigh.map(movie => (
              <Link
                to={`filme/${movie.id}`}
                onClick={() => {
                  if (this.props.getMovieId) {
                    this.props.getMovieId(movie.id);
                  }
                }}
                key={movie.id}
              >
                <Slider.Item movie={movie} key={movie.id}>
                  item1
                </Slider.Item>
              </Link>
            ))}
          </Slider>
        </div>
        <hr className='home-div' />
        <div className='emCartaz'>
          <div className='movie-title-section'>
            <h2 className='title-emCartaz'>Em Cartaz</h2>
          </div>
          <Slider>
            {this.state.movies.map(movie => (
              <Link
                to={`filme/${movie.id}`}
                onClick={() => {
                  if (this.props.getMovieId) {
                    this.props.getMovieId(movie.id);
                  }
                }}
              >
                <Slider.Item movie={movie} key={movie.id}>
                  item1
                </Slider.Item>
              </Link>
            ))}
          </Slider>
        </div>

        <hr className='home-div' />
        <div className='emBreve'>
          <div className='movie-title-section'>
            <div>
              <h2 className='title-emBreve'>Em Breve</h2>
              <Slider>
                {this.state.moviesSoon.map(movie => (
                  <Link
                    to={`filme/${movie.id}`}
                    onClick={() => {
                      if (this.props.getMovieId) {
                        this.props.getMovieId(movie.id);
                      }
                    }}
                    key={movie.id}
                  >
                    <Slider.Item movie={movie} key={movie.id} />
                  </Link>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Movies;
