import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.signup(username, password)
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
          interest: "",
        });
        this.props.getUser(response);
      })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>

          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />

          <label>Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />

          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />

          <label>Email:</label>
          <input type="text" name="email" value={this.state.email} onChange={e => this.handleChange(e)} />

          <label>Age:</label>
          <input type="Number" name="age" value={this.state.age} onChange={e => this.handleChange(e)} />

          <label>Occupation:</label>
          <input type="text" name="occupation" value={this.state.occupation} onChange={e => this.handleChange(e)} />

          <label>Image:</label>
          <input type="file" name="image" value={this.state.image} onChange={e => this.handleChange(e)} />

          <label>Cellphone:</label>
          <input type="text" name="cellphone" value={this.state.cellphone} onChange={e => this.handleChange(e)} />

          <label>City:</label>
          <input type="text" name="city" value={this.state.city} onChange={e => this.handleChange(e)} />

          <label>Favorite Movie:</label>
          <input type="text" name="favoriteMovie" value={this.state.favoriteMovie} onChange={e => this.handleChange(e)} />

          <label>About:</label>
          <input type="text" name="about" value={this.state.about} onChange={e => this.handleChange(e)} />

          <label>Interest:</label>
          <input type="text" name="interest" value={this.state.interest} onChange={e => this.handleChange(e)} />

          <input type="submit" value="Signup" />
        </form>

        <p>Already have account?
          <Link to={"/"}> Login</Link>
        </p>

      </div>
    )
  }
}

export default Signup;