import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      name: '',
      email: '',
      age: '',
      occupation: '',
      image: '',
      cellphone: '',
      city: '',
      favoriteMovie: '',
      about: '',
      interest: '',
    };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const name = this.state.name;
    const email = this.state.email;
    const age = this.state.age;
    const occupation = this.state.occupation;
    const image = this.state.image;
    const cellphone = this.state.cellphone;
    const city = this.state.city;
    const favoriteMovie = this.state.favoriteMovie;
    const about = this.state.about;
    const interest = this.state.interest;

    this.service.signup(username, password, name, email, age, occupation, image, cellphone, city, favoriteMovie, about, interest)
      .then(response => {
        this.setState({
          username: "",
          password: "",
          name: "",
          email: "",
          age: "",
          occupation: "",
          image: "",
          cellphone: "",
          city: "",
          favoriteMovie: "",
          about: "",
          interest: ""
        });
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
          <label>Usuário:</label>
          <input
            type='text'
            name='username'
            placeholder='Insira seu melhor email'
            value={this.state.username}
            onChange={e => this.handleChange(e)}
          />

          <label>Senha:</label>
          <input
            type='password'
            name='password'
            placeholder='Crie uma senha'
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />

          <label>Cidade:</label>
          <input
            type='text'
            name='city'
            placeholder='Cidade'
            value={this.state.city}
            onChange={e => this.handleChange(e)}
          />

          {/* <label>Nome:</label>
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />

          <label>Email:</label>
          <input
            type='text'
            name='email'
            value={this.state.email}
            onChange={e => this.handleChange(e)}
          />

          <label>Idade:</label>
          <input
            type='Number'
            name='age'
            value={this.state.age}
            onChange={e => this.handleChange(e)}
          />

          <label>Profissão:</label>
          <input
            type='text'
            name='occupation'
            value={this.state.occupation}
            onChange={e => this.handleChange(e)}
          />

          <label>foto de perfil:</label>
          <input
            type='file'
            name='image'
            value={this.state.image}
            onChange={e => this.handleChange(e)}
          />

          <label>Celular:</label>
          <input
            type='text'
            name='cellphone'
            value={this.state.cellphone}
            onChange={e => this.handleChange(e)}
          />


          <label>Filme favorito:</label>
          <input
            type='text'
            name='favoriteMovie'
            value={this.state.favoriteMovie}
            onChange={e => this.handleChange(e)}
          />

          <label>Sobre:</label>
          <input
            type='text'
            name='about'
            value={this.state.about}
            onChange={e => this.handleChange(e)}
          />

          <label>Interesses:</label>
          <input
            type='text'
            name='interest'
            value={this.state.interest}
            onChange={e => this.handleChange(e)}
          /> */}

          <input type='submit' value='Signup' />
        </form>

        <p>
          Já possui uma conta?
          <Link to={"/"}> Entrar </Link>
        </p>
      </div>
    );
  }
}

export default Signup;
