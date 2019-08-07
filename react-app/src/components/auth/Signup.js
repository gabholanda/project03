import React, { Component, Fragment } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";
import "./signup.css";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      name: '',
      email: '',
    };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const name = this.state.name;
    const email = this.state.email;
    this.service.signup(username, password, name, email)
      .then(response => {
        this.setState({
          username: "",
          password: "",
          name: "",
          email: "",
        });
      })
      .catch(error => console.log(error));
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
        <Fragment>
          <div className='form-container'>
            <div className='signup-container'>
            <div className='signup-box'>
              <div className='signup-call'>
              <img src='../images/logo.svg' alt='cinex logotype' />
              <h3 className='signup-title'>Escolha um filme, entre em um grupo e faça amigos de uma maneira diferente!</h3>
              <p className='signup-description'>Conheça uma plataforma diferente de tudo o que você já testou. Você simplesmente vai amar!</p>
              </div>
              <form className='signup-form' onSubmit={this.handleFormSubmit}>
                <Link to='/'>
                  <img className='back-home-signup' src='./images/close.svg' alt="home" />
                </Link>
                <input
                  type='text'
                  placeholder='Seu nome'
                  name='name'
                  value={this.state.name}
                  onChange={e => this.handleChange(e)}
                />

            <input
            type='text'
            name='email'
            placeholder='Insira seu email'
            value={this.state.email}
            onChange={e => this.handleChange(e)}
            />

            <input
            type='text'
            name='username'
            placeholder='Crie o seu usuário'
            value={this.state.username}
            onChange={e => this.handleChange(e)}
            />

            <input
            type='password'
            name='password'
            placeholder='Crie uma senha'
            value={this.state.password}
            onChange={e => this.handleChange(e)}
            />

            <input type='submit' value='Signup' />
            <hr className='signup-div'/>
            <p className='signup-cta'>
            Já possui uma conta?
            </p>
            <Link className='signup-create'to={"/login"}> Entrar </Link>
            </form>

            </div>
          </div>
          </div>
          <Footer/> 
        </Fragment>
    );
  }
}


export default Signup;
