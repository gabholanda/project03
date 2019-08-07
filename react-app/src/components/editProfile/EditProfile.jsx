import React, { Component } from 'react';
import axios from 'axios';
import './EditProfile.css';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      email: this.props.image.user.email,
      image: this.props.user.image,
      
    }
  }


  handleFormSubmit = (event) => {
    const title = this.state.title;
    const description = this.state.description;

    event.preventDefault();

    axios.put(`${process.env.REACT_APP_API_URL}/projects/${this.props.theProject._id}`, { title, description })
      .then(() => {
        // this.props.getTheProject();
        // after submitting the form, redirect to '/projects'
        this.props.history.push('/projects');
      })
      .catch(error => console.log(error))
  }

  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleChangeDesc = (event) => {
    this.setState({
      description: event.target.value
    })
  }

  render() {
    return (
      <div>
        <hr />
        <h3>Edit form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={this.state.title} onChange={e => this.handleChangeTitle(e)} />
          <label>Description:</label>
          <textarea name="description" value={this.state.description} onChange={e => this.handleChangeDesc(e)} />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default EditProfile;