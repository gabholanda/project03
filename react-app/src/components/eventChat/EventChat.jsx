import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./EventChat.css";
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

  componentDidMount() {
    this.getEvents();
  }

  render() {
    console.log("ois");
    return (
      <div className=''>
        <nav aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <Link to='/home'>Início</Link>
            </li>
            <li className='breadcrumb-item'>
              <Link to='/home'>Filme</Link>
            </li>
            <li className='breadcrumb-item'>
              <Link to='/home'>Evento</Link>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              Chat
            </li>
          </ol>
        </nav>
        <h5>Chat</h5>
        <h1 className=''>{this.state.event.title}</h1>
        <h5>0 pessoas online</h5>
        <div>O chat vai aqui</div>
        <h2>Host do evento</h2>
        <div>
          <img src='' alt='' />
          <h4>{this.state.event.host}</h4>
          <p>{this.state.event.host}</p>
        </div>
      </div>
    );
  }
}

export default EventMovie;
