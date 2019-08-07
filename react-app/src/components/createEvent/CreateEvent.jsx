import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CreateEvent.css";
import axios from "axios";

class EventMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: 1,
      date: "",
      theaterId: "oi",
      sessionId: "",
      poster: "",
      form: {
        eventTitle: "",
        eventDuration: "",
        typeOfActivity: "",
        language: "",
        photo1: "",
        firstInterationTitle: "",
        firstInterationDescription: "",
        secondInterationTitle: ""
      },
      sessions: [
        {
          id: "",
          price: 0,
          type: [""],
          realDate: {
            dayOfWeek: "",
            hour: "",
            year: ""
          },
          siteURL: "",
          enabled: false,
          blockMessage: ""
        }
      ],
      event: [
        {
          id: "",
          name: "",
          address: "",
          number: "",
          neighborhood: "",
          rooms: [
            {
              name: "",
              sessions: [
                {
                  id: "",
                  price: 0,
                  type: [""],
                  realDate: {
                    dayOfWeek: "",
                    hour: "",
                    year: ""
                  },
                  siteURL: "",
                  enabled: false,
                  blockMessage: ""
                }
              ]
            }
          ]
        }
      ]
    };

    this.handleChange = this.handleChange.bind(this);
  }

  getPoster() {
    axios
      .get(`http://localhost:5000/api/filme/${this.props.match.params.movieId}`)
      .then(responseFromApi => {
        this.setState({
          poster: responseFromApi.data
        });
      })
      .catch(error => console.log(error));
  }

  getEvents(city, date) {
    axios
      .get(
        `http://localhost:5000/api/sessions/city/${city}/event/${
          this.props.match.params.movieId
        }/date/${date}`
      )
      .then(responseFromApi => {
        this.setState({
          event: responseFromApi.data
        });
      })
      .catch(error => console.log(error));
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    if (event.target.name === "date") {
      this.getEvents(this.state.city, event.target.value);
    }
  }

  componentDidMount() {
    this.getPoster();
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
              <Link to='/'>Filme</Link>
            </li>
              <li className='breadcrumb-item active' aria-current='page'>
            Filme
            </li> 
          </ol>
        </nav>

        <div className='event-container'>
          <div className='left-container'>
          <img className='event-poster'src={this.state.poster.posterV} alt='poster film' />
          </div>
        <div className='right-container'>
        <form onSubmit={this.handleFormSubmit}>

          <div className='create-main-info'>
            <h2>Principais informações do evento</h2>
            
            {/* inputs */}
            <input
              type='text'
              name='eventTitle'
              id=''
              placeholder='Titulo do evento'
              value={this.state.form.eventTitle}
            />
            <input
              type='text'
              name='eventDuration'
              id=''
              placeholder='Duração do evento'
              value={this.state.form.eventDuration}
            />
            <input
              type='text'
              name='typeOfActivity'
              id=''
              placeholder='Tipo de atividade'
              value={this.state.form.typeOfActivity}
            />
            <input
              type='text'
              name='language'
              id=''
              placeholder='Qual língua será falada?'
            />
            {/* inputs ends*/}
            {/* select*/}
            <select onChange={event => this.handleChange(event)} name='city'>
              <option value='1'>São Paulo</option>
              <option value='2'>Rio de Janeiro</option>
              <option value='18'>Curitiba</option>
              <option value='4'>Aracaju</option>
              <option value='52'>Belém</option>
              <option value='21'>Belo Horizonte</option>
              <option value='441'>Boa Vista</option>
              <option value='12'>Brasília</option>
              <option value='47'>Campo Grande</option>
              <option value='28'>Cuiabá</option>
              <option value='68'>Florianópolis</option>
              <option value='36'>Fortaleza</option>
              <option value='15'>Goiânia</option>
              <option value='32'>João Pessoa</option>
              <option value='303'>Macapá</option>
              <option value='53'>Maceió</option>
              <option value='35'>Manaus</option>
              <option value='48'>Natal</option>
              <option value='363'>Palmas</option>
              <option value='5'>Porto Alegre</option>
              <option value='347'>Porto Velho</option>
              <option value='22'>Recife</option>
              <option value='364'>Rio Branco</option>
              <option value='3'>Salvador</option>
              <option value='19'>São Luís</option>
              <option value='435'>Teresina</option>
              <option value='11'>Vitória</option>
            </select>
            {/* select ends*/}

            {/* date*/}
            <input
              type='date'
              name='date'
              id=''
              onChange={event => this.handleChange(event)}
            />

            {/* local theater*/}
            <select
              onChange={event => this.handleChange(event)}
              name='theaterId'
            >
              {this.state.event.map(event => {
                return (
                  <option key={event.id} value={event.id}>
                    {event.name}
                  </option>
                );
              })}
            </select>
            
            {/* session*/}
            <select
              onChange={event => this.handleChange(event)}
              name='sessionId'
            >
              {this.state.event.map(event => {
                if (this.state.theaterId === event.id) {
                  return event.rooms.map(room => {
                    return room.sessions.map(session => {
                      return (
                        <option key={session.id} value={session.id}>
                          {session.realDate.dayOfWeek} - {session.realDate.hour}
                          - {room.name} - R${session.price}
                        </option>
                      );
                    });
                  });
                }
              })}
            </select>
            {/* session*/}
            <h2>Qual será o roteiro?</h2>
            <p>
              Pense que todo evento sempre existe um começo, um meio e um fim.
              Aqui você mostrará qual será o itinerário completo para o seus
              convidados.
            </p>
            <div className='row'>
              <div className='col-md-4'>
                <div className='profile-img'>
                  <img src='http://interfacetreinamentos.com.br/wp-content/uploads/2016/04/img-profile-default.jpg' />
                  <div className='file btn btn-lg btn-primary'>
                    Change Photo
                    <input type='file' name='photo1' />
                  </div>
                  <input
                    type='text'
                    name='firstInterationTitle'
                    id=''
                    placeholder='Primeira Interação'
                  />
                  <textarea
                    type='text'
                    name='firstInterationDescription'
                    id=''
                    placeholder='Descreva em poucas palavras o que será feito.'
                  />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4'>
                <div className='profile-img'>
                  <img src='http://interfacetreinamentos.com.br/wp-content/uploads/2016/04/img-profile-default.jpg' />
                  <div className='file btn btn-lg btn-primary'>
                    Change Photo
                    <input type='file' name='photo' />
                  </div>
                  <input
                    type='text'
                    name='SecondInterationTitle'
                    id=''
                    placeholder='Segunda Interação'
                  />
                  <textarea
                    type='text'
                    name='SecondInterationDescription'
                    id=''
                    placeholder='Descreva em poucas palavras o que será feito.'
                  />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4'>
                <div className='profile-img'>
                  <img src='http://interfacetreinamentos.com.br/wp-content/uploads/2016/04/img-profile-default.jpg' />
                  <div className='file btn btn-lg btn-primary'>
                    Change Photo
                    <input type='file' name='photo' />
                  </div>
                  <input
                    type='text'
                    name='thirdInterationTitle'
                    id=''
                    placeholder='Terceira Interação'
                  />
                  <textarea
                    type='text'
                    name='thirdInterationDescription'
                    id=''
                    placeholder='Descreva em poucas palavras o que será feito.'
                  />
                </div>
              </div>
            </div>
          </div>
          <button type='submit'>Criar esse evento</button>
        </form>
          
        </div>
      </div>
      </div>
    );
  }
}

export default EventMovie;
