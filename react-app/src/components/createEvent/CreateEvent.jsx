import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import "./CreateEvent.css";
import axios from "axios";

class EventMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      city: 1,
      date: "",
      theaterId: "oi",
      sessionId: "",
      movieId: this.props.movieId,
      poster: "",
      eventTitle: "",
      eventDuration: "",
      typeOfActivity: "",
      language: "",
      firstInterationTitle: "",
      firstInterationDescription: "",
      secondInterationTitle: "",
      secondInterationDescription: "",
      thirdInterationTitle: "",
      thirdInterationDescription: "",
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
    this.FormSubmit = this.FormSubmit.bind(this);
  }

  getPoster() {
    axios
      .get(`http://localhost:5000/api/filme/${this.state.movieId}`)
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
          this.state.movieId
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

  FormSubmit(e) {
    e.preventDefault();
    const host = this.props.user;
    const city = this.state.city;
    const date = this.state.date;
    const theaterId = this.state.theaterId;
    const sessionId = this.state.sessionId;
    const movieId = this.state.movieId;
    const poster = this.state.poster;
    const eventTitle = this.state.eventTitle;
    const eventDuration = this.state.eventDuration;
    const typeOfActivity = this.state.typeOfActivity;
    const language = this.state.language;
    const firstInterationTitle = this.state.firstInterationTitle;
    const firstInterationDescription = this.state.firstInterationDescription;
    const secondInterationTitle = this.state.secondInterationTitle;
    const secondInterationDescription = this.state.secondInterationDescription;
    const thirdInterationTitle = this.state.thirdInterationTitle;
    const thirdInterationDescription = this.state.thirdInterationDescription;
    const form = {
      host,
      city,
      date,
      theaterId,
      sessionId,
      movieId,
      poster,
      eventTitle,
      eventDuration,
      typeOfActivity,
      language,
      firstInterationTitle,
      firstInterationDescription,
      secondInterationTitle,
      secondInterationDescription,
      thirdInterationTitle,
      thirdInterationDescription
    };
    axios
      .post(`http://localhost:5000/api/events`, { form })
      .then(responseFromApi => {
        //console.log(responseFromApi) // Descomentar isso se quiser ver se criou mesmo
        this.setState({
          redirect: true,
          city: 1,
          date: "",
          theaterId: "oi",
          sessionId: "",
          movieId: this.props.movieId,
          poster: "",
          eventTitle: "",
          eventDuration: "",
          typeOfActivity: "",
          language: "",
          firstInterationTitle: "",
          firstInterationDescription: "",
          secondInterationTitle: "",
          secondInterationDescription: "",
          thirdInterationTitle: "",
          thirdInterationDescription: "",
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
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.setState({
      movieId: this.props.movieId
    });
    this.getPoster();
  }

  // componentWillReceiveProps() {
  //   this.setState({
  //     movieId: this.props.match.params.movieId
  //   });
  // }


  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />;
    } else {
      return (

        <div className='create-container'>
          {/* Poster side */}
          <div className='poster-side'>
            <img className='poster-movie'src={this.state.poster.posterV} alt='poster' />
          </div>

          {/* info side - forms and others */}

          <div className='info-side'>
              <h2 className='create-main-title'>Criar um evento é muito fácil</h2>
              <h3 className='create-headers'>1.Informações principais do evento</h3>
              <p className='create-text'>Pense que todo evento sempre existe um começo, um meio e um fim.<br/> Aqui você mostrará qual será o itinerário completo para o seus convidados.</p>


          <form className='create-form' onSubmit={this.FormSubmit}>

              <div className='create-first'>
                <div className='create-inputs'>
                  <input
                    type='text'
                    name='eventTitle'
                    id=''
                    placeholder='Titulo do evento'
                  />
                  <input
                    type='text'
                    name='eventDuration'
                    id=''
                    placeholder='Duração do evento'
                  />
                  <input
                    type='text'
                    name='typeOfActivity'
                    id=''
                    placeholder='Tipo de atividade'
                  />
                  <input
                    type='text'
                    name='language'
                    id=''
                    placeholder='Qual língua será falada?'
                  />
                <hr className='create-div'/>
              <p className='create-headers'>2.Sobre o evento</p>

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
                            {session.realDate.dayOfWeek} -{" "}
                            {session.realDate.hour}- {room.name} - R$
                            {session.price}
                          </option>
                        );
                      });
                    });
                  }
                })}
              </select>
              <hr className='create-div'/>
              {/* session*/}

              <h2 className='create-headers'>3.Qual será o roteiro?</h2>
                <p className='create-text'>
                Pense que todo evento sempre existe um começo, um meio e um
                fim. <br/>Aqui você mostrará qual será o itinerário completo para o
                seus convidados.
                </p>

              <div className='interation'>
                <img src='http://interfacetreinamentos.com.br/wp-content/uploads/2016/04/img-profile-default.jpg' alt='' />
              
              <div className='interation-description'>
                <input
                className='interation-description'
                  type='text'
                  name='firstInterationTitle'
                  id=''
                  placeholder='Primeira Interação'
                  onChange={event => this.handleChange(event)}
                />
                <textarea
                  type='text'
                  name='firstInterationDescription'
                  id=''
                  placeholder='Descreva em poucas palavras o que será feito.'
                  onChange={event => this.handleChange(event)}
                />
              </div>

              </div>
              <hr className='div-interations'/>
              
              <div className='interation'>
                <img className='image-interation'src='http://interfacetreinamentos.com.br/wp-content/uploads/2016/04/img-profile-default.jpg' alt='' />


                <div className='interation-description'>
                <input
                  type='text'
                  name='secondInterationTitle'
                  id=''
                  placeholder='Segunda Interação'
                  onChange={event => this.handleChange(event)}
                />
                <textarea
                  type='text'
                  name='secondInterationDescription'
                  id=''
                  placeholder='Descreva em poucas palavras o que será feito.'
                  onChange={event => this.handleChange(event)}
                />
              </div>

              </div>
              <hr className='div-interations'/>
              <div className='interation'>
                <img src='http://interfacetreinamentos.com.br/wp-content/uploads/2016/04/img-profile-default.jpg' alt='' />
                
                <div className='interation-description'>

                <input
                  type='text'
                  name='thirdInterationTitle'
                  id=''
                  placeholder='Terceira Interação'
                  onChange={event => this.handleChange(event)}
                />
                <textarea
                  type='text'
                  name='thirdInterationDescription'
                  id=''
                  placeholder='Descreva em poucas palavras o que será feito.'
                  onChange={event => this.handleChange(event)}
                />
                </div>
              </div>
            <button className='create-button-event'type='submit'>Criar esse evento</button>
                </div>
                {/* end */}
              </div>




            {/* <input
              type='text'
              name='movieId'
              id=''
              hidden
              value={this.props.match.params.movieId}
              onChange={event => this.handleChange(event)}
            /> */}
          </form>
        </div>
      </div>
      );
    }
  }
}

export default EventMovie;
