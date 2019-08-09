import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import { Switch, Route } from "react-router-dom";

import ProtectedRoute from "./components/auth/protected-routes"
import ProtectedAuthRoute from './components/auth/protected-auth-routes'

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
      loggedInUser: null,
      movieId: null,
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

  getEventId = id => {
    this.setState({
      eventId: id
    });
  };

  getTheUser = userObj => {
    console.log('-------> user atualizado', this.state.loggedInUser);
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
            <Route exact path='/filme/:movieId' render={() => <Movie movieId={this.state.movieId} getEventId={this.getEventId} />} />
            <Route exact path='/evento/:eventId' render={() => <Event eventId={this.state.eventId} user={this.state.loggedInUser} />} />
            {/* <Route exact path='/chat' component={Chat} /> */}
            <ProtectedAuthRoute
              user={this.state.loggedInUser}
              exact
              path='/login'
              render={() => <Login getUser={this.getTheUser} />}
            />
            <ProtectedAuthRoute
              user={this.state.loggedInUser}
              exact
              path='/signup'
              render={() => <Signup getUser={this.getTheUser} />}
            />
            <ProtectedRoute
              user={this.state.loggedInUser}
              exact
              path='/edit/profile'
              render={(props) => <EditProfile {...props} user={this.state.loggedInUser} getUser={this.getTheUser}/>}
            />
            <ProtectedRoute
              user={this.state.loggedInUser}
              exact
              path='/usuario/perfil'
              render={(props) => <Profile {...props} user={this.state.loggedInUser} getUser={this.getTheUser}/>}
            />
            <ProtectedRoute
              user={this.state.loggedInUser}
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
            <ProtectedRoute
              user={this.state.loggedInUser}
              exact path='/usuario/perfil'
              render={() => <Profile user={this.state.loggedInUser} />} />
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
            <ProtectedAuthRoute
              exact
              path='/login'
              render={() => <Login getUser={this.getTheUser} />}
            />
            <ProtectedAuthRoute
              exact
              path='/signup'
              render={() => <Signup getUser={this.getTheUser} />}
            />
            <ProtectedRoute
              exact
              path='/edit/profile'
              render={(props) => <EditProfile {...props} user={this.state.loggedInUser} />}
            />
            <ProtectedRoute
              user={this.state.loggedInUser}
              exact
              path='/usuario/perfil'
              render={(props) => <Profile {...props} user={this.state.loggedInUser} />}
            />
            <ProtectedRoute
              user={this.state.loggedInUser}
              exact
              path='/filme/:movieId/criar_evento'
              // component={CreateEvent}
              render={() => (
                <CreateEvent
                  // user={this.state.loggedInUser}
                  movieId={this.state.movieId}
                />
              )}
            />
            <ProtectedRoute
              user={this.state.loggedInUser}
              exact path='/usuario/perfil'
              render={() => <Profile user={this.state.loggedInUser} />} />
            {/* <Route
              exact
              path='/filme/:movieId/criar_evento'
              component={CreateEvent}
            /> */}
          </Switch>
        </div>
      );
    }
  }
}

export default App;
