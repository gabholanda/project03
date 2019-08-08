const express = require("express");
const mongoose = require("mongoose");
const Event = require("../models/Events");
const axios = require("axios");
const router = express.Router();
//GET route => Top Movie
router.get("/destaque", (req, res, next) => {
  axios
    .get(`${process.env.INGRESSOS_DESTAQUE_API}`)
    .then(movies => {
      const movie = movies.data.map(movie => {
        return {
          id: movie.event.id,
          title: movie.event.title,
          image: movie.event.images[1].url
        };
      });
      res.json(movie);
    })
    .catch(err => console.log(err));
});
//----------------------------------------------------------------------------------
//GET route => Top Movies
router.get("/destaques", (req, res, next) => {
  axios
    .get(`${process.env.INGRESSOS_HIGHLIGHTS_API}`)
    .then(movies => {
      const movie = movies.data.map(movie => {
        return {
          id: movie.event.id,
          title: movie.event.title,
          image: movie.event.images[0].url,
          poster: movie.event.images[1].url,
          trailer: movie.event.trailers[0] || 'none',
          description: movie.event.synopsis
        };
      });
      res.json(movie);
    })
    .catch(err => console.log(err));
});
//----------------------------------------------------------------------------------
// GET route => On the cinema
router.get("/cartaz", (req, res, next) => {
  axios
    .get(`${process.env.INGRESSOS_CARTAZ_API}`)
    .then(movies => {
      const movie = movies.data.map(movie => {
        return { id: movie.id, title: movie.title, image: movie.images[0].url };
      });
      res.json(movie);
    })
    .catch(err => console.log(err));
});
//------------------------------------------------------------------------------------
// GET route => coming soon movies
router.get("/breve", (req, res, next) => {
  axios
    .get(`${process.env.INGRESSOS_BREVE_API}`)
    .then(movies => {
      const movie = movies.data.map(movie => {
        return { id: movie.id, title: movie.title, image: movie.images[0].url };
      });
      res.json(movie);
    })
    .catch(err => console.log(err));
});
//--------------------------------------------------------------------------------------
//GET route => Single Movie
router.get("/filme/:movieId", (req, res, next) => {
  const movieId = req.params.movieId;
  axios
    .get(`${process.env.INGRESSOS_EVENTS}/${movieId}/partnership/ironhackapp`)
    .then(movie => {
      let trailer = "0";
      if (movie.data.trailers[0]) {
        trailer = movie.data.trailers[0].url;
      }
      const movieInfo = {
        id: movie.data.id,
        title: movie.data.title,
        genre: movie.data.genres,
        duration: movie.data.duration,
        trailer: trailer,
        sinopse: movie.data.synopsis,
        posterV: movie.data.images[0].url,
        posterH: movie.data.images[1].url
      };
      res.json(movieInfo);
    })
    .catch(err => console.log(err));
});
//--------------------------------------------------------------------------------------
// GET route => Movie by city and date
router.get(
  `/sessions/city/:cityId/event/:eventId/date/:date`,
  (req, res, next) => {
    const { cityId, eventId, date } = req.params;
    axios
      .get(
        `${
          process.env.INGRESSOS_SESSIONS
        }/${cityId}/event/${eventId}/partnership/ironhackapp?date=${date}`
      )
      .then(theaters => {
        const theater = theaters.data[0].theaters.map(theater => {
          return {
            id: theater.id,
            name: theater.name,
            address: theater.address,
            number: theater.number,
            neighborhood: theater.neighborhood,
            rooms: theater.rooms.map(room => {
              return {
                name: room.name,
                sessions: room.sessions.map(session => {
                  return {
                    id: session.id,
                    price: session.price,
                    type: session.type,
                    realDate: {
                      dayOfWeek: session.realDate.dayOfWeek,
                      dayAndMoth: session.realDate.dayAndMoth,
                      hour: session.realDate.hour,
                      year: session.realDate.year
                    },
                    siteURL: session.siteURL,
                    enabled: session.enabled,
                    blockMessage: session.blockMessage
                  };
                })
              };
            })
          };
        });
        res.json(theater);
      })
      .catch(err => console.log(err));
  }
);
//---------------------------------------------------------------------------------
module.exports = router;
