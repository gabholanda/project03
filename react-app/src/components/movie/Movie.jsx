import React, { Component } from "react";
import "./Movie.css";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Movie.css";
import Footer from "../footer/footer";

class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = { movie: 0, events: [], theaterName: "" };
  }

  getMovie = () => {
    if (this.props.movieId) {
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/filme/${
          this.props.movieId
          }`
        )
        .then(responseFromApi => {
          this.setState({
            movie: responseFromApi.data
          });
        })
        .catch(error => console.log(error));
    } else {
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/filme/${
          this.props.match.params.movieId
          }`
        )
        .then(responseFromApi => {
          this.setState({
            movie: responseFromApi.data
          });
        })
        .catch(error => console.log(error));
    }
  }

  getTheater = theaterId => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/cinema/${theaterId}`)
      .then(responseFromApi => {
        this.setState({
          theaterName: responseFromApi.data
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
    if (this.props.movieId) {
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/events/${
          this.props.movieId
          }`
        )
        .then(responseFromApi => {
          this.setState({
            events: responseFromApi.data
          });

          this.state.events.map(event => {
            this.getTheater(event.theaterId);
          });
        })
        .catch(error => console.log(error));
    }
    else {
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/events/${
          this.props.match.params.movieId
          }`
        )
        .then(responseFromApi => {
          this.setState({
            events: responseFromApi.data
          });

          this.state.events.map(event => {
            this.getTheater(event.theaterId);
          });
        })
        .catch(error => console.log(error));
    }

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
    const backgroundMovie = {
      backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.8827906162464986) 0%, rgba(255,255,255,0) 90%),
      url(${this.state.movie.posterH})`,
      height: "500px",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      objectFit: "cover"
      // filter: "blur(5px)"
    };

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
        <div className='bg-movie-onmovie' style={backgroundMovie} />
        {/* movie poster */}

        <div className='movie-details'>
          <div className='otherInfo'>
            <figure className='movie-poster'>
              <img src={this.state.movie.posterV} alt='' />
            </figure>

            <div className='movie-info'>
              <h1 className='title-movie'>{this.state.movie.title}</h1>
              <p className='title-genre'>{this.state.movie.genre}</p>
              <p className='title-duration'>
                {this.state.movie.duration} minutos
              </p>
              <button className='trailer-link'>
                <img className='play-icon' src='../images/play.svg' alt='' />
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={this.state.movie.trailer}
                >
                  Ver Trailer
                </a>
              </button>

              {/* others info */}
              <div className='sinopse'>
                <h2 className=''>Sinopse</h2>
                <p className=''>{this.state.movie.sinopse}</p>
              </div>

              <hr className='movie-div' />

              {/* events */}
              <h2 className='eventos'>Eventos</h2>

              {this.state.events.map(event => {
                // this.getTheater(event.theaterId);
                return (
                  <div className='movie-events'>
                    <div className='' key={event.id}>
                      <div className='active-aligned'>
                        <h3 className='movie-type'>{event.movieDate}</h3>
                        <h4 className='movie-type'>{event.typeOfActivity}</h4>
                      </div>
                      <h3 className='movie-title'>{event.title}</h3>
                      <h5 className='movie-type'>
                        {this.state.theaterName.name}
                        {" - "}
                        {this.state.theaterName.address}
                      </h5>
                      {/* know more about this event */}
                      <button className='active-saiba-mais'>
                        <Link to={`/evento/${event.id}`} onClick={() => { if (this.props.getEventId) this.props.getEventId(event.id) }}>Saiba Mais</Link>
                      </button>
                    </div>
                  </div>
                );
              })}

              <br />
              <button className='create-event'>
                <Link to={`${this.props.movieId}/criar_evento`} >
                  + Quero criar um evento
                </Link>
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Movie;
