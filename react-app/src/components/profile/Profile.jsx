import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import Footer from "../footer/footer";
// import axios from "axios";


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = { user: this.props.user, events: [], status: false };
    this.status = true;
  }

  // getUser = () => {
  //   axios
  //     .get(`http://localhost:5000/api/filme/${this.props.match.params.movieId}`)
  //     .then(responseFromApi => {
  //       this.setState({
  //         user: responseFromApi.data
  //       });
  //     })
  //     .catch(error => console.log(error));
  // };

  // getEvents = () => {
  //   axios
  //     .get(
  //       `http://localhost:5000/api/events/${this.props.match.params.movieId}`
  //     )
  //     .then(responseFromApi => {
  //       this.setState({
  //         events: responseFromApi.data
  //       });
  //     })
  //     .catch(error => console.log(error));
  // };

  componentDidMount() {
   console.log(this.state.user)
   this.setState({
     status: true
   })
  }

  render() {
    if(!this.status){
      console.log('STATUS FALSE')
      return (
        <div></div>
      )
    } else {
      console.log('STATUS TRUE')
      return (
        <div>
        <div className='myProfile'>

          <div className='profile-left'>
          <div className='profile-avatar'>
            <img src={this.state.user.image}/>
          </div>

          <Link to ="/edit/profile">
          <button className='button-edit-profile'>editar perfil</button>
          </Link>

          </div>

          <div className="profile-right">
            <div className="about">
              <h2 className='profile-info'>Meu nome é</h2>
          <h1 className='profile-dados'>{this.state.user.name} </h1>
          <h2 className='profile-info'>E-mail</h2>
          <h3 className='profile-headers'>{this.state.user.email}</h3>
          <h2 className='profile-info'>Cidade</h2>
          <p>{this.state.user.city}</p>
          <h2 className='profile-info'>Sobre mim</h2>
          <p>{this.state.user.about}</p>
            <hr className='profile-div'/>

          </div>

          <div className="about-movies">
          <h2 className='profile-film-info'>Filme favorito</h2>
          {<p>{this.state.user.favoriteMovie}
          </p> && this.state.user.favoriteMovie} 
          <h2 className='profile-film-info'>Hobbies</h2>
         {<p>{this.state.user.hobbies}</p> && this.state.user.hobbies}
         <h2 className='profile-film-info'>Lugar favorito</h2>
          {<p>{this.state.user.favoritePlace}</p> && this.state.user.favoritePlace}

          </div>
          <hr className='profile-div'/>

            <h1 className='profile-dados'>Eventos Ativos</h1>

            <div class="active-events">
            <h3 className='active-type'>tipo de atividade</h3>
            <h2 className='active-title'>título do evento</h2>
            <h3 className='active-type'>dia/mês</h3>
            <h4 className='active-type'>local</h4>
            <button className='active-saiba-mais'>Saiba Mais</button>

          </div>
          </div>
        </div>
        <Footer/>
        </div>
      );
    }
  }
}

export default Profile;
