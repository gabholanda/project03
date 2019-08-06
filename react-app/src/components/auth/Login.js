import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";

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
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type='text'
            name='username'
            placeholder='Insira seu username'
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
          <input type='submit' value='Entrar' />
        </form>
        <button className=''>
          <Link to='/evento/criar'>Entrar pelo Google</Link>
        </button>
        <hr />
        <p>Não possui conta?</p>
        <button className=''>
          <Link to='/evento/criar'>Entre aqui</Link>
        </button>
      </div>
    );
  }
}
export default Login;
