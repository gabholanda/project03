import React, { Component } from 'react';
import axios from 'axios';

class Movies extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  
  // componentDidMount() {
  // axios.get(`https://api-content.ingresso.com/v0/events/partnership/ironhackapp`)
  //   .then(movie => console.log(movie))
  //   .catch(err => console(err))

  // }

  render() {
    return (
      <h1>Olá</h1>
    )
  }
}

export default Movies
