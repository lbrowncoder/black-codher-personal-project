const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  address: String,
  postcode: String,
});

mongoose.model('info', userSchema, "info");

