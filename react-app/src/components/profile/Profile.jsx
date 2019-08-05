import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = { user: 0, events: [] };
  }

  getUser = () => {
    axios
      .get(`http://localhost:5000/api/filme/${this.props.match.params.movieId}`)
      .then(responseFromApi => {
        this.setState({
          user: responseFromApi.data
        });
      })
      .catch(error => console.log(error));
  };

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

  componentDidMount() {
    this.getUser();
    this.getEvents();
  }

  render() {
    return (
      <div className=''>
       <img src="https://www.deviantart.com/vanitas37/art/Link-Avatar-276215258"/>

       <div className="about">
         <h1>My name is</h1>

         <h3>Sobre mim</h3>

         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem aut corporis magnam quam. Itaque in ad asperiores obcaecati. Sunt commodi eaque deleniti quas quidem illum ipsam ut aliquam? Consequuntur, natus!</p>

         <div className="about-info">
           <h3>Meu filme favorito é</h3>

           <h3>Hobbies</h3>

           <h3>Lugar favorito</h3>

         </div>

         <h1>Eventos Ativos</h1>
          <h3>tipo de atividade</h3>
          <h3>dia/mês</h3>
          <h3>título do evento</h3>
          <h4>local</h4>
          <button>Saiba Mais</button>
         <div class="my-events">

         </div>
       </div>
      </div>
    );
  }
}

export default Profile;
