import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import './login.css';
import Footer from '../footer/footer'
=======
import "./login.css";
import Footer from "../footer/footer";
>>>>>>> origin

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service
      .login(username, password)
      .then(response => {
        this.setState({ username: "", password: "" });
        this.props.getUser(response);
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='form-container'>
        <div className='login-box'>
<<<<<<< HEAD
        <form className='login-form'onSubmit={this.handleFormSubmit}>
        <Link to='/'><img className='back-home' src='./images/close.svg'/></Link>
      
        <h3 className='login-title'>Entre agora na melhor de rede de eventos de cinema do Brasil</h3>

          <input
            type='text'
            name='username'
            placeholder='Insira seu email'
            value={this.state.username}
            onChange={e => this.handleChange(e)}
          />

          <input
            type='password'
            name='password'
            placeholder='Senha'
            value={this.state.password}
            onChange={e => this.handleChange(e)}
            />
            {/* button */}
          <input type='submit' value='Entrar' />

        <button className='signup-google'>
          <img src='./images/google-logo.svg'/>
          <Link to='/evento/criar'>Entrar pelo Google</Link>
        </button>

        <hr className='login-div'/>

          <p className='login-cta'>Não possui conta?</p>
          <Link className='signup-create'to='/evento/criar'>Entre aqui seu cuzao</Link>
        </form>

        </div>
        <Footer/>
=======
          <Link className='login-form' onSubmit={this.handleFormSubmit}>
            <Link to='/'>
              <img className='back-home' src='./images/close.svg' />
            </Link>
            <h3 className='login-title'>
              Entre agora na melhor de rede de eventos de cinema do Brasil
            </h3>
            ​
            <input
              type='text'
              name='username'
              placeholder='Insira seu email'
              value={this.state.username}
              onChange={e => this.handleChange(e)}
            />
            <input
              type='password'
              name='password'
              placeholder='Senha'
              value={this.state.password}
              onChange={e => this.handleChange(e)}
            />
            {/* button */}
            <input type='submit' value='Entrar' />
            <button className='signup-google'>
              <img src='./images/google-logo.svg' />
              <Link to='/evento/criar'>Entrar pelo Google</Link>
            </button>
            <hr className='login-div' />
            <p className='login-cta'>Não possui conta?</p>
            <Link className='signup-create' to='/evento/criar'>
              Entre aqui seu cuzao
            </Link>
          </Link>
        </div>
        <Footer />
>>>>>>> origin
      </div>
    );
  }
}
export default Login;
