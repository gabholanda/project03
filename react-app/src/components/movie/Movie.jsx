import React, { Component } from "react";
import "./Movie.css";
import { Link } from "react-router-dom";
import axios from "axios";

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
    return (
      <div className=''>
        <nav aria-label='breadcrumb'>
          <ol class='breadcrumb'>
            <li class='breadcrumb-item'>
              <Link to='/'>Início</Link>
            </li>
            <li class='breadcrumb-item active' aria-current='page'>
              Filme
            </li>
          </ol>
        </nav>
        <div className=''>
          <img className='' src={this.state.movie.posterV} alt='' />
          <h1 className=''>{this.state.movie.title}</h1>
          <p className=''>{this.state.movie.genre}</p>
          <p className=''>{this.state.movie.duration} minutos</p>
          <button className=''>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={this.state.movie.trailer}
            >
              Traler
            </a>
          </button>
        </div>
        <hr className='' />
        <div className=''>
          <h2 className=''>Sinopse</h2>
          <p className=''>{this.state.movie.sinopse}</p>
        </div>
        <hr className='' />
        <div>
          <h2 className=''>Eventos</h2>
          {this.state.events.map(event => {
            return (
              <div key={event.id}>
                <h3 className=''>{event.dateMovie}</h3>
                <h4 className=''>{event.typeOfActivity}</h4>
                <h3 className=''>{event.title}</h3>
                <h5 className=''>{event.place}</h5>
                <button className=''>
                  <Link to={`/evento/${event.id}`}>Saiba Mais</Link>
                </button>
              </div>
            );
          })}

          <button className=''>
            <Link to='/evento/criar'>+ Criar um evento</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Movie;
