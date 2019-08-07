import React, { Component } from "react";
import "./Movie.css";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Movie.css";

class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = { movie: 0, events: [] };
  }

  getMovie = () => {
    axios
      .get(`http://localhost:5000/api/filme/${this.props.match.params.movieId}`)
      .then(responseFromApi => {
        this.setState({
          movie: responseFromApi.data
        });
      })
      .catch(error => console.log(error));
  };

  // getMovie = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/filme/${this.props.match.params.movieId}`)
  //     .then(responseFromApi => {
  //       this.setState({
  //         movie: responseFromApi.data
  //       });
  //     })
  //     .catch(error => console.log(error));
  // };

  getEvents = () => {
    axios
      .get(
        `http://localhost:5000/api/events/${this.props.match.params.movieId}`
      )
      .then(responseFromApi => {
        this.setState({
          events: responseFromApi.data
        });
      })
      .catch(error => console.log(error));
  };

  // getEvents = () => {
  //   axios
  //     .get(
  //       `${process.env.REACT_APP_API_URL}/events/${this.props.match.params.movieId}`
  //     )
  //     .then(responseFromApi => {
  //       this.setState({
  //         events: responseFromApi.data
  //       });
  //     })
  //     .catch(error => console.log(error));
  // };

  componentDidMount() {
    this.getMovie();
    this.getEvents();
  }

  render() {
    console.log(this.state.events);

    return (
      <div className='movie-page'>
        {/* breadcrumb */}
        <nav aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <Link to='/'>Início</Link>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              Filme
            </li>
          </ol>
        </nav>

        {/* Bg movie */}
        <div className='bg-movie-onmovie'>
          <img className='blur-image' src={this.state.movie.posterH} />
        </div>
        {/* movie poster */}

        <div className='movie-details'>
          <div className='movie-poster'>
            <img
              className='movie-poster'
              src={this.state.movie.posterV}
              alt=''
            />
          </div>
          <div className='movie-info'>
            <h1 className='title-movie'>{this.state.movie.title}</h1>
            <p className='title-genre'>{this.state.movie.genre}</p>
            <p className='title-duration'>
              {this.state.movie.duration} minutos
            </p>
            <button className='trailer-link'>
              <img className='play-icon' src='../images/play.svg' />
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={this.state.movie.trailer}
              >
                Ver Trailer
              </a>
            </button>
          </div>
        </div>
        <div className='otherInfo'>
          {/* others info */}
          <div className='sinopse'>
            <h2 className=''>Sinopse</h2>
            <p className=''>{this.state.movie.sinopse}</p>
          </div>

          <hr className='movie-div' />

          {/* events */}
          <h2 className='eventos'>Eventos</h2>
          {this.state.events.map(event => {
            return (
              <div key={event.id}>
                <h3 className=''>{event.dateMovie}</h3>
                <h4 className=''>{event.typeOfActivity}</h4>
                <h3 className=''>{event.title}</h3>
                <h5 className=''>{event.place}</h5>

                {/* know more about this event */}
                <button className=''>
                  <Link to={`/evento/${event.id}`}>Saiba Mais</Link>
                </button>
              </div>
            );
          })}

          <br />
          <button className='create-event'>
            <Link to={`${this.props.match.params.movieId}/criar_evento`}>
              + Criar um evento
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Movie;
