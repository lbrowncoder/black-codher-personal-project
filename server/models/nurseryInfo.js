const { text } = require('body-parser');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const InfoSchema = new Schema({
  name: {type:String, unique: true},
  address: String,
  postcode: String,
  ofsteadRating: String,
  openingHours: String,
  openingTimes: String,
  writeUp: String,
  fees: [{
    fullTime: Number,
    fullDay: Number,
    halfday: Number,
  }],
  firstAidTrained:{
    type: Boolean,
    default: false,
  } 
  
 
});

mongoose.model('info', InfoSchema, "info");

