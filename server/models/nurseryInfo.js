const mongoose = require('mongoose');
const { Schema } = mongoose;

const InfoSchema = new Schema({
  name: String,
  address: String,
  postcode: String,
});

mongoose.model('info', InfoSchema, "info");

