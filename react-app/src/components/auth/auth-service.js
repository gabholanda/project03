import axios from 'axios';

class AuthService {
  constructor() {
    // let service = axios.create({
    //   baseURL: process.env.REACT_APP_API_URL,
    //   withCredentials: true
    // });
    let service = axios.create({
      baseURL: "http://localhost:5000/api",
      withCredentials: true
    });

    this.service = service;
  }

  signup = (username, password, email, name) => {
    return this.service.post('/signup', { username, password, email, name })
      .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/loggedin')
      .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post('/login', { username, password })
      .then(response => response.data)
  }

  logout = () => {
    return this.service.get('/logout')
      .then(response => response.data)
  }
}

export default AuthService;