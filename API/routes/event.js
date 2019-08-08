const express = require("express");
const mongoose = require("mongoose");
const Event = require("../models/Events");
const User = require("../models/Users");
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
  Event.find({ movieId: { $eq: movieId } })
    .then(allTheEvents => {
      const event = allTheEvents.map(event => {
        return {
          id: event._id,
          title: event.eventTitle,
          place: event.place,
          movieDate: event.date,
          typeOfActivity: event.typeOfActivity,
          theaterId: event.theaterId
        };
      });
      res.json(event);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET route => to get all the events by user
router.get("/events-by-user/:userId", (req, res, next) => {
  const userId = req.params.userId;

  Event.find({ host: { $eq: userId } })
    .then(allTheEvents => {
      const event = allTheEvents.map(event => {
        return {
          id: event._id,
          title: event.eventTitle,
          place: event.place,
          movieDate: event.date,
          typeOfActivity: event.typeOfActivity,
          theaterId: event.theaterId
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
  const {
    eventTitle,
    eventDuration,
    typeOfActivity,
    language,
    city,
    date,
    theaterId,
    sessionId,
    firstInterationTitle,
    firstInterationDescription,
    secondInterationTitle,
    secondInterationDescription,
    thirdInterationTitle,
    thirdInterationDescription,
    host,
    movieId
  } = req.body.form;

  const newEvent = new Event({
    eventTitle: eventTitle,
    duration: eventDuration,
    typeOfActivity: typeOfActivity,
    language: language,
    city: city,
    date: date,
    theaterId: theaterId,
    session: sessionId,
    firstInterationTitle,
    firstInterationDescription,
    secondInterationTitle,
    secondInterationDescription,
    thirdInterationTitle,
    thirdInterationDescription,
    host: host,
    movieId: movieId,
    members: [host]
  });
  Event.create(newEvent)
    .then(response => {
      User.findByIdAndUpdate(host._id, { $push: { events: newEvent, host: newEvent } })
        .then(user => {
          res.status(200).json({ message: "Event created successfuly" })
        })
        .catch(err => res.status(400).json(err));
    })
    .catch(e => res.status(200).json(e));

  // User receives the event as it's host and event list

  // Event.create({
  //   title: eventTitle,
  //   duration: eventDuration,
  //   typeOfActivity: typeOfActivity,
  //   language: language,
  //   city: city,
  //   date: date,
  //   theaterId: theaterId,
  //   session: sessionId,
  //   firstInterationTitle,
  //   firstInterationDescription,
  //   secondInterationTitle,
  //   secondInterationDescription,
  //   thirdInterationTitle,
  //   thirdInterationDescription,
  //   host: host,
  //   movieId: movieId
  // })
  //   .then(response => {
  //     console.log(response);
  //   })
  //   .catch(err => {
  //     res.json(err);
  //   });
});

// GET route => to get a specific event/detailed view
router.get("/event/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Event.findById(req.params.id)
    .populate("host")
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

// PUT route => to update a specific project
router.put("/event/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Event.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      res.status(200).json({
        message: `Project with ${req.params.id} is updated successfully.`
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

// Join in a user to the event
router.put("/join-event/:eventId/user/:userId", (req, res, next) => {
  const userId = req.params.userId;
  const eventId = req.params.eventId;
  User.findByIdAndUpdate(userId, { $push: { events: eventId } })
    .then(user => {
      Event.findByIdAndUpdate(eventId, { $push: { members: userId } })
        .then(() =>
          res.json({
            message: `You have joined the event successfully!`
          }))
        .catch(err => {
          res.json(err);
        })
    })
    .catch(err => {
      res.json(err);
    })
})

module.exports = router;
