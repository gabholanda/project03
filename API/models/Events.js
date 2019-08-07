const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema(
  {
    title: String,
    subtitle: String,
    backImg: String,
    place: String,
    duration: String,
    language: { type: String, enum: ["Português", "Inglês", "Espanhol"] },
    description: Array,
    description: [
      {
        interation: {
          image: String,
          description: String
        }
      }
    ],
    host: String,
    event: {
      movieId: String,
      dateMovie: String,
      theaterId: String,
      roomName: String,
      sessionId: String
    },
    participants: { type: Number, default: 0 }
  },
  {
    timestamps: true
  }
);

const Event = mongoose.model("Events", EventSchema);

module.exports = Event;
