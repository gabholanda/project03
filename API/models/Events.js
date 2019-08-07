const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema(
  {
    eventTitle: String,
    duration: String,
    typeOfActivity: String,
    language: { type: String, enum: ["Português", "Inglês", "Espanhol"] },
    city: String,
    date: String,
    theaterId: String,
    sessionId: String,
    firstInterationTitle: String,
    firstInterationDescription: String,
    secondInterationTitle: String,
    secondInterationDescription: String,
    thirdInterationTitle: String,
    thirdInterationDescription: String,
    host: String,
    participants: { type: Number, default: 0 },
    movieId: String
  },
  {
    timestamps: true
  }
);

const Event = mongoose.model("Events", EventSchema);

module.exports = Event;
