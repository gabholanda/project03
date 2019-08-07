import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home/home";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Movie from "./components/movie/Movie.jsx";
import Event from "./components/eventMovie/EventMovie.jsx";
// import Chat from "./components/eventChat/EventChat.jsx";
import CreateEvent from "./components/createEvent/CreateEvent.jsx";
import EditProfile from "./components/editProfile/EditProfile.jsx";
import Profile from "./components/profile/Profile.jsx";
import AuthService from "./components/auth/auth-service";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null
    };
    this.service = new AuthService();
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }

  getMovieId = id => {
    this.setState({
      movieId: id
    });
  };

  getTheUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  render() {    
    this.fetchUser();
    if (this.state.loggedInUser) {
      return (
        <div className='App'>
          <Navbar
            userInSession={this.state.loggedInUser}
            getUser={this.getTheUser}
          />
          <Switch>
            <Route
              exact
              path='/'
              render={() => <Home getMovieId={this.getMovieId} />}
            />
            <Route exact path='/filme/:movieId' component={Movie} />
            <Route exact path='/evento/:eventId' component={Event} />
            {/* <Route exact path='/chat' component={Chat} /> */}
            <Route
              exact
              path='/login'
              render={() => <Login getUser={this.getTheUser} />}
            />
            <Route
              exact
              path='/signup'
              render={() => <Signup getUser={this.getTheUser} />}
            />
            <Route
              exact
              path='/usuario/:userId/perfil/editar'
              component={EditProfile}
            />
            <Route
              exact
              path='/usuario/perfil'
              render={() => <Profile user={this.state.loggedInUser} />}
            />
            <Route
              exact
              path='/filme/:movieId/criar_evento'
              // component={CreateEvent}
              render={() => (
                <CreateEvent
                  user={this.state.loggedInUser}
                  movieId={this.state.movieId}
                />
              )}
            />
          </Switch>
        </div>
      );
    } else {
      return (
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/filme/:movieId' component={Movie} />
            <Route exact path='/evento/:eventId' component={Event} />
            {/* <Route exact path='/chat' component={Chat} /> */}
            <Route
              exact
              path='/login'
              render={() => <Login getUser={this.getTheUser} />}
            />
            <Route
              exact
              path='/signup'
              render={() => <Signup getUser={this.getTheUser} />}
            />
            <Route
              exact
              path='/usuario/:userId/perfil/editar'
              component={EditProfile}
            />
            <Route
              exact
              path='/filme/:movieId/criar_evento'
              component={CreateEvent}
            />
          </Switch>
        </div>
      );
    }
  }
}

export default App;
