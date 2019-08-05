import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Login from './components/auth/Login'
import { Switch, Route } from 'react-router-dom';
import Signup from './components/auth/Signup'

function App() {
  return (
    <div className="App">
      <Signup />
      {/* <Navbar /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
