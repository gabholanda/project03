import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import Footer from "../footer/footer";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = { user: this.props.user, events: [], status: false };
    this.status = true;
  }

  getEvents = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/events-by-user/${this.state.user._id}`
      )
      .then(responseFromApi => {
        this.setState({
          events: responseFromApi.data
        });
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    this.setState({
      status: true,
      user: this.props.user
    });
    this.getEvents();
  }

  render() {
    if (!this.status) {
      return <div />;
    } else {
      return (
        <>
          <div className='myProfile'>
            <div className='profile-left'>
              <div className='avatar-container'>
                <figure className='profile-avatar'>
                  <img src={this.state.user.image} alt='my-profile' />
                </figure>
                <Link to='/edit/profile'>
                  <button className='button-edit-profile'>editar perfil</button>
                </Link>
              </div>
            </div>

            <div className='profile-right'>
              <div className='about'>
                <h2 className='profile-info'>Meu nome é</h2>
                <h2 className='profile-dados'>{this.state.user.name} </h2>
                <h2 className='profile-info'>E-mail</h2>
                <h3 className='profile-dados'>{this.state.user.email}</h3>
                <h2 className='profile-info'>Cidade</h2>
                <h3 className='profile-dados'>{this.state.user.city}</h3>
                <h2 className='profile-info'>Sobre mim</h2>
                <h2 className='profile-dados'>{this.state.user.about}</h2>
              </div>
                <hr className='profile-div' />

              <div className='about-movies'>
                <h2 className='profile-film-info'>Filme favorito: </h2>
                <div className='about-movies-answers'>
                  {<p>{this.state.user.favoriteMovie}</p> &&
                    this.state.user.favoriteMovie}
                </div>

                <h2 className='profile-film-info'>Hobbies: </h2>
                <div className='about-movies-answers'>
                  {<p>{this.state.user.hobbies}</p> && this.state.user.hobbies}
                </div>

                <h2 className='profile-film-info'>Lugar favorito: </h2>
                <div className='about-movies-answers'>
                  {<p>{this.state.user.favoritePlace}</p> &&
                    this.state.user.favoritePlace}
                </div>
              </div>

              <hr className='profile-div' />

              <h1 className='profile-dados'>Eventos Ativos</h1>
              {this.state.events.map(event => {
                return (
                  <div className='active-events'>
                    <h3 className='active-type'>{event.typeOfActivity}</h3>
                    <h2 className='active-title'>{event.title}</h2>
                    <h3 className='active-type'>{event.movieDate}</h3>
                    <h4 className='active-type'>local: </h4>
                    <button className='active-saiba-mais'>
                      <Link to={`/evento/${event.id}`}>
                        Saiba Mais
                    </Link>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <Footer />
        </>
      );
    }
  }
}

export default Profile;
