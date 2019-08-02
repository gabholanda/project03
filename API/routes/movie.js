const express = require("express");
const mongoose = require("mongoose");
const Event = require("../models/Events");
const axios = require("axios");

const router = express.Router();

// GET route => Top Movies
router.get("/destaques", (req, res, next) => {
  axios
    .get(
      `https://api-content.ingresso.com/v0/templates/highlights/1?partnership=${INGRESSO_KEY}`
    )
    .then(movie => res.json(movie.data))
    .catch(err => console(err));
});

router.get("/destaques/", (req, res, next) => {
  axios
    .get(
      `https://api-content.ingresso.com/v0/templates/highlights/1?partnership=${INGRESSO_KEY}`
    )
    .then(movie => res.json(movie.data))
    .catch(err => console(err));
});

// GET route => On the cinema
router.get("/cartaz", (req, res, next) => {
  axios
    .get(
      `https://api-content.ingresso.com/v0/templates/nowplaying/1?partnership=${INGRESSO_KEY}`
    )
    .then(movie => res.json(movie.data))
    .catch(err => console(err));
});

// GET route => coming soon movies
router.get("/em_breve", (req, res, next) => {
  axios
    .get(
      `https://api-content.ingresso.com/v0/templates/soon/1?partnership=${INGRESSO_KEY}`
    )
    .then(movie => res.json(movie.data))
    .catch(err => console(err));
});

module.exports = router;
