const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: String,
  password: String,
  name: String,
  email: String, 
  age: Number,
  occupation: String,
  image: String,
  cellphone: Number,
  confirmationCode: String,
  status: {type: String, enum: ['active', 'pendent'], default: 'pendent'}, 
  city: String,
  favoriteMovie: String,
  about: String,
  interest: Array,
  role: {type: String, default: 'user'}
  
}, {
  timestamps: true
})

const User = mongoose.model("User", userSchema);

module.exports = User;