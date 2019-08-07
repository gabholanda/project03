const express = require('express');
const router = express.Router();
const User = require('../models/Users')
const passport = require('passport');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');


// router.get('/signup', (req, res, next) => {
//   res.render('index');
// })



router.post('/signup', (req, res, next) => {
  const { username, password, name, email } = req.body;
  // if (req.file) {
  //   let image = req.file.secure_url;
  // }
  // Creates random confirmation Code
  const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let token = '';
  for (let i = 0; i < 25; i++) {
    token += characters[Math.floor(Math.random() * characters.length)];
  }
  const confirmationCode = token;

  if (!username || !password || !name || !email) {
    res.status(400).json({ message: 'Provide username, password, name, email' });
    return;
  }

  if (password.length < 8) {
    res.status(400).json({ message: 'Please make your password at least 8 characters long for security purposes.' });
    return;
  }
  // Checks if there is already an user with that username
  User.findOne({ username }, (err, foundUser) => {

    if (err) {
      res.status(500).json({ message: "Username check went bad." });
      return;
    }

    if (foundUser) {
      res.status(400).json({ message: 'Username taken. Choose another one.' });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);
    // Creates new user to save on DB
    const newUser = new User({
      username,
      password: hashPass,
      name,
      email,
      confirmationCode,
    },
      // { omitUndefined: true }
    )
    newUser.save(err => {
      if (err) {
        res.status(400).json({ message: 'Error upon saving user on DB.' });
        return;
      }
      res.status(200).json(newUser);
    });
  });
});

// Login post route
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({ message: 'Something went wrong authenticating user' });
      return;
    }

    if (!theUser) {
      console.log(!theUser)
      // "failureDetails" contains the error messages
      // from our logic in "LocalStrategy" { message: '...' }.
      res.status(401).json(failureDetails);
      return;
    }

    // save user in session
    req.login(theUser, (err) => {
      if (err) {
        res.status(500).json({ message: 'Session save went bad.' });
        return;
      }
      // We are now logged in (that's why we can also send req.user)
      res.status(200).json(theUser);
    });
  })(req, res, next);
});

router.get('/logout', (req, res, next) => {
  // req.logout() is defined by passport
  req.logout();
  res.status(200).json({ message: 'Log out success!' });
});

router.get('/loggedin', (req, res, next) => {
  // req.isAuthenticated() is defined by passport
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(401).json({ message: 'Unauthorized' });
});

module.exports = router;