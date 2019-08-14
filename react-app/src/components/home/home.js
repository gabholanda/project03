import React, { Component } from "react";
import Movies from '../movie/movies';
import axios from "axios";
import "./home.css";
import FeaturedMovie from "../movie/featuredMovie";
import Footer from "../footer/footer";

class Home extends Component {
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
      .get(`${process.env.REACT_APP_API_URL}/destaques`)
      .then(responseFromApi => {
        this.setState({
          moviesHigh: responseFromApi.data
        });
      })
      .catch(error => console.log(error));
  };

  getMovie = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/cartaz`)
      .then(responseFromApi => {
        this.setState({
          movies: responseFromApi.data
        });
      })
      .catch(error => console.log(error));
  };

  getMovieSoon = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/breve`)
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
          movieId={this.state.moviesHigh[0].id}
          getMovieId={this.props.getMovieId}
        />
        <div className='destaques'>
          <div className='movie-title-section'>
            <h2 className='home-destaques'>Destaques</h2>
          </div>
          <Movies movies={this.state.moviesHigh}
            getMovieId={this.props.getMovieId} />
        </div>
        <hr className='home-div' />
        <div className='emCartaz'>
          <div className='movie-title-section'>
            <h2 className='title-emCartaz'>Em Cartaz</h2>
          </div>
          <Movies movies={this.state.movies}
            getMovieId={this.props.getMovieId} />
        </div>
        <hr className='home-div' />
        <div className='emBreve'>
          <div className='movie-title-section'>
            <div>
              <h2 className='title-emBreve'>Em Breve</h2>
              <Movies movies={this.state.moviesSoon}
                getMovieId={this.props.getMovieId} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
