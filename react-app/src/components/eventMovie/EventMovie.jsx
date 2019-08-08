import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./EventMovie.css";
import axios from "axios";

class EventMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: 0,
      event:
      {
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
          name: '',
        }
      }
    };
  }

  getEvents = () => {
    if (this.props.eventId) {
      axios
        .get(`http://localhost:5000/api/event/${this.props.eventId}`)
        .then(responseFromApi => {
          this.setState({
            event: responseFromApi.data
          });
        })
        .catch(error => console.log(error));
    } else {
      axios
        .get(`http://localhost:5000/api/event/${this.props.match.params.eventId}`)
        .then(responseFromApi => {
          this.setState({
            event: responseFromApi.data
          });
        })
        .catch(error => console.log(error));
    }
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
  enterEvent() {
    axios
      .put(`http://localhost:5000/api/join-event/${this.props.eventId}/user/${this.props.user._id}`)
      .then(responseFromApi => {
        console.log(responseFromApi)
      })
      .catch(error => console.log(error));
  }
  componentDidMount() {
    this.getEvents();
  }

  render() {
      return (
        <div className=''>
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
          {/* breadcrumb end */}

          <img className='' src={this.state.movie.posterV} alt='poster-movie' />
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
            <div>
              <img src='' alt='' />
              <h4>{this.state.event.firstInterationTitle}</h4>
              <p>{this.state.event.firstInterationDescription}</p>
            </div>
            <div>
              <img src='' alt='' />
              <h4>{this.state.event.secondInterationTitle}</h4>
              <p>{this.state.event.secondInterationDescription}</p>
            </div>
            <div>
              <img src='' alt='' />
              <h4>{this.state.event.thirdInterationTitle}</h4>
              <p>{this.state.event.thirdInterationDescription}</p>
            </div>
          </div>
          <div>
            <h2>Local do Filme</h2>
            {/* // GOOGLE MAPS HERE */}
          </div>
          <div>
            <img src='' alt='' />
            <h4>{this.state.event.host.name}</h4>
            <p>{this.state.event.host.name}</p>
          </div>
          <button className='' onClick={() => this.enterEvent()}>
            Participar!
          </button>
        </div>
      </div>
    );
  }
}

export default EventMovie;
