const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: Number,
  occupation: String,
  image: {type: String, default: "http://interfacetreinamentos.com.br/wp-content/uploads/2016/04/img-profile-default.jpg"},
  cellphone: Number,
  confirmationCode: { type: String, required: true },
  status: { type: String, enum: ['active', 'pendent'], default: 'pendent' },
  city: String,
  favoriteMovie: String,
  about: String,
  interest: Array,
  role: { type: String, default: 'user' }

}, {
    timestamps: true
  })

const User = mongoose.model("User", userSchema);

module.exports = User;
