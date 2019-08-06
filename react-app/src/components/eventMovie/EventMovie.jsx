import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./EventMovie.css";
import axios from "axios";

class EventMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: 0,
      event: {
        description: [
          { interation: { image: "test", description: "test" }, _id: 0 }
        ]
      }
    };
  }
  
  getEvents = () => {
    axios
      .get(`http://localhost:5000/api/event/${this.props.match.params.eventId}`)
      .then(responseFromApi => {
        this.setState({
          event: responseFromApi.data
        });
      })
      .catch(error => console.log(error));
  };

  // getEvents = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/event/${this.props.match.params.eventId}`)
  //     .then(responseFromApi => {
  //       this.setState({
  //         event: responseFromApi.data
  //       });
  //     })
  //     .catch(error => console.log(error));
  // };

  componentDidMount() {
    this.getEvents();
  }

  render() {
    console.log("this.state.event.movieId");
    return (
      <div className=''>
        <nav aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <Link to='/home'>Início</Link>
            </li>
            <li className='breadcrumb-item'>
              <Link to={`/filme/${this.state.event.movieId}`}>Filme</Link>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              Evento
            </li>
          </ol>
        </nav>
        <img className='' src={this.state.movie.posterV} alt='' />
        <div>
          <button className=''>
            <Link to='www.google.com.br'>Sair do grupo</Link>
          </button>
          <button className=''>
            <Link to='www.google.com.br'>Editar evento</Link>
          </button>
        </div>
        <div className=''>
          <h3 className=''>{this.state.event.typeOfActivity}</h3>
          <h1 className=''>{this.state.event.title}</h1>
          <p className=''>{this.state.event.dateMovie}</p>
          <hr />
          <p className=''>
            O evento tem duração de {this.state.event.duration} minutos
          </p>
          <p className=''>As pessoas falam {this.state.event.language}</p>
          <p className=''>
            {this.state.event.participants} pessoas irão a esse evento
          </p>
          <div>
            <h2>O que vamos fazer?</h2>
            {this.state.event.description.map(interation => {
              return (
                <div key={interation._id}>
                  <img src={interation.interation.image} alt='' />
                  <h4>{interation.interation.description}</h4>
                </div>
              );
            })}
          </div>
          <div>
            <h2>Local do Filme</h2>
            // GOOGLE MAPS HERE
          </div>
          <div>
            <img src='' alt='' />
            <h4>{this.state.event.host}</h4>
            <p>{this.state.event.host}</p>
          </div>
          <button className=''>
            <Link to='www.google.com.br'>Sair do grupo</Link>
          </button>
          {/* <button className=''>
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
              <div>
                <h3 className=''>{event.dateMovie}</h3>
                <h4 className=''>{event.typeOfActivity}</h4>
                <h3 className=''>{event.title}</h3>
                <h5 className=''>{event.place}</h5>
                <button className=''>
                  <Link to='www.google.com.br'>Saiba Mais</Link>
                </button>
              </div>
            );
          })}

          <button className=''>
            <Link to='www.google.com.br'>+ Criar um evento</Link>
          </button> */}
        </div>
      </div>
    );
  }
}

export default EventMovie;
