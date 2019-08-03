const express = require("express");
const mongoose = require("mongoose");
const Event = require("../models/Events");

const router = express.Router();

// GET route => to get all the events
router.get("/events", (req, res, next) => {
  Event.find()
    // .populate("tasks")
    .then(allTheEvents => {
      res.json(allTheEvents);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET route => to get all the events by movie
router.get("/events/:movieId", (req, res, next) => {
  const movieId = req.params.movieId;
  Event.find({ "event.movieId": { $eq: movieId } })
    .then(allTheEvents => {
      const event = allTheEvents.map(event => {
        return {
          id: event._id,
          title: event.title,
          place: event.place,
          movieDate: event.movieDate,
          typeOfActivity: event.typeOfActivity
        };
      });
      res.json(event);
    })
    .catch(err => {
      res.json(err);
    });
});

// POST route => to create a new event
router.post("/events", (req, res, next) => {
  Event.create({
    title: req.body.title,
    subtitle: req.body.substitle,
    backImg: req.body.backimg,
    place: req.body.place,
    duration: req.body.duration,
    language: req.body.language,
    description: {
      interation1: {
        // image: req.file.image1,
        description: req.body.description1
      },
      interation2: {
        // image: req.file.image2,
        description: req.body.description2
      },
      interation3: {
        // image: req.file.image3,
        description: req.body.description3
      }
    },
    host: req.body.userId,
    event: {
      movieId: req.body.movieId,
      dateMovie: req.body.dateMovie,
      theaterId: req.body.theaterId,
      roomName: req.body.roomName,
      sessionId: req.body.sessionId
    }
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET route => to get a specific event/detailed view
router.get("/events/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Event.findById(req.params.id)
    // .populate("tasks")
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

// PUT route => to update a specific event
router.put("/events/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Event.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({
        message: `Event with ${req.params.id} is updated successfully.`
      });
    })
    .catch(err => {
      res.json(err);
    });
});

// DELETE route => to delete a specific event
router.delete("/events/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Event.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        message: `Event with ${req.params.id} is removed successfully.`
      });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
