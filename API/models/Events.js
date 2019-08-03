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
    description: {
      interation1: {
        image: String,
        description: String
      },
      interation2: {
        image: String,
        description: String
      },
      interation3: {
        image: String,
        description: String
      }
    },
    host: { type: Schema.Types.ObjectId, ref: "Users" },
    event: {
      movieId: String,
      dateMovie: String,
      theaterId: String,
      roomName: String,
      sessionId: String
    },
    participants: 0
  },
  {
    timestamps: true
  }
);

const Event = mongoose.model("Events", EventSchema);

module.exports = Event;
