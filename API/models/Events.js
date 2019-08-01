const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema(
  {
    title: String,
    subtitle: String,
    back-img: String,
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
    host: String
  },
  {
    timestamps: true
  }
);

const Event = mongoose.model("Events", EventSchema);

module.exports = Event;
