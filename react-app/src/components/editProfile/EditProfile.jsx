import React, { Component } from 'react';
import axios from 'axios';
import './EditProfile.css';
import service from '../../api/service'
import { Redirect } from 'react-router-dom'
import Footer from "../footer/footer";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      image: this.props.user.image,
      city: this.props.user.city,
      favoriteMovie: this.props.user.favoriteMovie,
      about: this.props.user.about, 
      hobbies: this.props.user.hobbies,
      favoritePlace: this.props.user.favorite, 
      flag: false,
    }
  }


  handleFormSubmit = (event) => {
    event.preventDefault();
    
    const {name, image, city, favoriteMovie, about, hobbies, favoritePlace} = this.state;

    axios.put(`${process.env.REACT_APP_API_URL}/editUser/${this.props.user._id}`, { name, image, city, favoriteMovie, about, hobbies, favoritePlace })
    .then((user) => {
        this.props.getUser(null);
        this.setState({       
          flag: true
        })
      
        // console.log('updated>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', user)
      })
      .catch(error => console.log(error))
  }

  handleChange= (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleFileUpload = e => {
    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append("image", e.target.files[0]);
    
    service.handleUpload(uploadData)
    .then(response => {
        // console.log('response is: ', response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state 
        this.setState({ 
          image: response.secure_url });
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
}


  render() {
    return (
      <div className='profile-edit'>

        <div className='profile-edit-container'>

        
        <div className='profile-edit-left'>
           <img className='profile-avatar' src={this.state.image} alt="my-profile"/>
          <input className='button-send-file'type="file" name="image" onChange={e => this.handleFileUpload(e)} />
            <label>image:</label>

        </div>

        <div className='profile-edit-right'>

          <form className='edit-form' onSubmit={this.handleFormSubmit} encType="multipart/form-data">
          
          <h3 className='profile-edit-dados'>Edit seu perfil</h3>
            <label>name:</label>
            <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />
            <label>city:</label>
            <input type="text" name="city" value={this.state.city} onChange={e => this.handleChange(e)} />
            <label>Sobre Mim</label>
            <textarea name="about" value={this.state.about} onChange={e => this.handleChange(e)} />
            <hr className='edit-div'/>
            <label>Filme favorito</label>
            <textarea name="favoriteMovie" value={this.state.favoriteMovie} onChange={e => this.handleChange(e)} />
            <label>Hobbies</label>
            <textarea name="hobbies" value={this.state.hobbies} onChange={e => this.handleChange(e)} />
            <label>Lugar favorito</label>
            <input type="text" name="favoritePlace" value={this.state.favoritePlace} onChange={e => this.handleChange(e)} />

            <input className='profile-edit-submit'type="submit" value="Submit" />
          </form>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}


export default EditProfile;