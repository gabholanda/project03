import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CreateEvent.css";
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
            <input type='date' name='' id='' placeholder='Data do evento' />
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
