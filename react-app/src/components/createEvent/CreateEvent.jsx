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
    // this.handleChangeDate = this.handleChangeDate.bind(this);
    // this.getEvents = this.getEvents.bind(this);
  }

  getEvents(city, date) {
    console.log(this.state.city);

    // if (city === undefined && date === undefined) {
    //   axios
    //     .get(
    //       `http://localhost:5000/api/sessions/city/1/event/${
    //         this.props.match.params.movieId
    //       }/date/${date}`
    //     )
    //     .then(responseFromApi => {
    //       this.setState({
    //         event: responseFromApi.data
    //       });
    //     })
    //     .catch(error => console.log(error));
    // } else {
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
    console.log(event.target.value);
    console.log(event.target.name);

    this.setState({
      [event.target.name]: event.target.value
    });
    if (event.target.name === "date") {
      this.getEvents(this.state.city, event.target.value);
    }
  }

  // handleChangeDate(event) {
  //   this.setState({
  //     date: event.target.value
  //   });
  //   this.getEvents(event.target.value);
  // }

  componentDidMount() {
    // this.getEvents();
  }

  render() {
    console.log(this.state.event);

    return (
      <div className=''>
        <button type='submit'>Criar esse evento</button>
        <form action='' method='post'>
          <input type='file' name='' id='' />
          <div>
            <h2>Principais informações do evento</h2>
            <input
              type='text'
              name='eventTitle'
              id=''
              placeholder='Titulo do evento'
            />
            <input
              type='text'
              name='typeOfActivity'
              id=''
              placeholder='Tipo de atividade'
            />
            //City
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
            //Date
            <input
              type='date'
              name='date'
              id=''
              onChange={event => this.handleChange(event)}
            />
            //Theater
            <select>
              {this.state.event.map(event => {
                return <option value={event.id}>{event.name}</option>;
              })}
            </select>
            <input type='time' name='' id='' placeholder='Duração do evento' />
            <input
              type='text'
              name=''
              id=''
              placeholder='Qual língua será falada?'
            />
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
                    <input type='file' name='photo' />
                  </div>
                  <input
                    type='text'
                    name=''
                    id=''
                    placeholder='Primeira Interação'
                  />
                  <textarea
                    type='text'
                    name=''
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
                    name=''
                    id=''
                    placeholder='Primeira Interação'
                  />
                  <textarea
                    type='text'
                    name=''
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
                    name=''
                    id=''
                    placeholder='Primeira Interação'
                  />
                  <textarea
                    type='text'
                    name=''
                    id=''
                    placeholder='Descreva em poucas palavras o que será feito.'
                  />
                </div>
              </div>
            </div>
          </div>
          <h2>Local do filme</h2>
          <input
            type='search'
            name=''
            id=''
            placeholder='Coloque aqui o endereço'
          />
          <button type='submit'>Criar esse evento</button>
        </form>
      </div>
    );
  }
}

export default EventMovie;
