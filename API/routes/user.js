const express = require('express');
const router  = express.Router();
const User = require('../models/Users')
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');


router.get('/signup', (req, res, next) => {
  res.render('index');
})

router.post('/signup', (req, res, next) => {
  const {username, password, name, email, age, occupation, cellphone, city, favoriteMovie, interest, about, role} = req.body;
  let image = undefined;
  if(req.file) {
    image = req.file.secure_url;
  }
  const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let token = '';
  for (let i = 0; i < 25; i++) {
  token += characters[Math.floor(Math.random() * characters.length )];
  }
  const confirmationCode = token;

  if (!username || !password || !name || !email || !age) {
    res.status(400).json({ message: 'Provide username and password' });
    return;
  }

  if (password.length < 18) {
    res.status(400).json({ message: 'You need to be at least 18.' });
    return;
  }

  if (password.length < 8) {
    res.status(400).json({ message: 'Please make your password at least 8 characters long for security purposes.' });
    return;
  }

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

    const newUser = User.create({username, password, name, email, age, occupation, cellphone, city, favoriteMovie, interest, about, role}, {omitUndefined: true})
  });
  res.status(200).json(newUser);
});

module.exports = router;