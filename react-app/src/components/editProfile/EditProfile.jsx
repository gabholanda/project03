import React, { Component } from 'react';
import axios from 'axios';
import './EditProfile.css';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      image: this.props.user.image,
      city: "",
      favoriteMovie: "",
      about: "", 
      hobbies: "",
      favoritePlace: "",
      
    }
  }


  handleFormSubmit = (event) => {
    const {name, description} = this.state;

    event.preventDefault();

    axios.put(`${process.env.REACT_APP_API_URL}/projects/${this.props.theProject._id}`, { name, description })
      .then(() => {
        // this.props.getTheProject();
        // after submitting the form, redirect to '/projects'
        this.props.history.push('/projects');
      })
      .catch(error => console.log(error))
  }

  handleChange= (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }


  render() {
    return (
      <div>
      <img src={this.state.image} />
        <hr />
        <h3>Edit seu perfil</h3>
        <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
          <label>image:</label>
          <input type="file" name="image" onChange={e => this.handleChange(e)} />
          <label>name:</label>
          <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />
          <label>city:</label>
          <input type="text" name="city" value={this.state.city} onChange={e => this.handleChange(e)} />
          <label>Sobre Mim</label>
          <textarea name="about" value={this.state.about} onChange={e => this.handleChange(e)} />
          <label>Filme favorito</label>
          <textarea name="favoriteMovie" value={this.state.about} onChange={e => this.handleChange(e)} />
          <label>Hobbies</label>
          <input type="text" name="hobbies" value={this.state.hobbies} onChange={e => this.handleChange(e)} />
          <label>Lugar favorito</label>
          <input type="text" name="favoritePlace" value={this.state.favoritePlace} onChange={e => this.handleChange(e)} />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default EditProfile;