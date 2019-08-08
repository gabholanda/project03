import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./EventMovie.css";
import axios from "axios";
import Footer from "../footer/footer";

class EventMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posterV: "",
      movie: 0,
      event: {
        participants: "",
        _id: "",
        title: "",
        duration: "",
        typeOfActivity: "",
        language: "",
        city: "",
        date: "",
        theaterId: "",
        firstInterationTitle: "",
        firstInterationDescription: "",
        SecondInterationTitle: "",
        SecondInterationDescription: "",
        thirdInterationTitle: "",
        thirdInterationDescription: "",
        movieId: "",
        host: {
          name: ""
          // Inserir aqui informações extras do host para descrever o evento
        }
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
        this.getMovie(responseFromApi.data.movieId);
      })
      .catch(error => console.log(error));
  };

  getMovie = movieId => {
    axios
      .get(`http://localhost:5000/api/filme/${movieId}`)
      .then(responseFromApi => {
        this.setState({
          posterV: responseFromApi.data.posterV
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
    return (
      <>
      {/* breadcrumb */}
        <nav aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <Link to='/'>Início</Link>
            </li>
            <li className='breadcrumb-item'>
              <Link to={`/filme/${this.state.event.movieId}`}>Filme</Link>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              Evento
            </li>
          </ol>
        </nav>
        {/* breadcrumb end*/}
        <div className='eventPage'>

          <div className='eventPage-left'>
            {/* image */}
            <img className='event-poster' src={this.state.posterV} alt='' />
            {/* buttons */}
            <div>
              <button className='event-buttons'>
                <Link to='www.google.com.br'>Editar evento</Link>
              </button>
              <button className='event-buttons-exit '>
                <Link to='www.google.com.br'>Sair do grupo</Link>
              </button>
            </div>
          </div>

        <div className='eventPage-right'>

            <h3 className='event-activity'>Atividade{this.state.event.typeOfActivity}</h3>
            <h1 className='event-title'>titulo{this.state.event.title}</h1>
            <p className='event-date'>ddfgdfg{this.state.event.dateMovie}</p>
            <hr className='event-div'/>
            <div className='event-important-info'>
              <p className=''>
                O evento tem duração de<br/> {this.state.event.duration} minutos
              </p>
              <p className=''>o evento será falado em <br/>{this.state.event.language}</p>
              <p className=''>
                {this.state.event.participants} pessoas <br/>irão a esse evento
              </p>
            </div>

            {/* O que iremos fazer */}
            <div>
              <h2 className='event-todo-title'>O que vamos fazer?</h2>

              <div className='interation'>
                {/* <img src='' alt='' /> */}
                <h4>1. {this.state.event.firstInterationTitle}</h4>
                <p>{this.state.event.firstInterationDescription}</p>
              </div>
              <div className='interation'>
                {/* <img src='' alt='' /> */}
                <h4>2. {this.state.event.secondInterationTitle}</h4>
                <p>{this.state.event.secondInterationDescription}</p>
              </div>
              <div className='interation'>
                {/* <img src='' alt='' /> */}
                <h4>3. {this.state.event.thirdInterationTitle}</h4>
                <p>{this.state.event.thirdInterationDescription}</p>
              </div>
            </div>

            {/* maps */}
            <div className='event-maps-container'>
              <h2 className='event-maps-title'>Local do Filme</h2>
              <div className='maps'>
                <img src='../images/maps.png' alt='cinex logotype' />
              </div>
              {/* // GOOGLE MAPS HERE */}
            </div>

            {/* host */}
            <h2 className='event-host-title'>Host do Evento</h2>

              <div className='event-host'>
              <div className='host-image'>
                <img src='' alt='host image here please' />
              </div>
            

              <div className='host-div'>
                <div className='host-info'>
                  <h4>{this.state.event.host.name}</h4>
                  <p>{this.state.event.host.name}</p>
                </div>
              </div>
            </div>

            <button className='event-button-exit2'>
              <Link to='www.google.com.br'>Sair do grupo</Link>
            </button>
        </div>
        </div>

          <Footer />
        </>
          );
        }
      }
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

export default EventMovie;
