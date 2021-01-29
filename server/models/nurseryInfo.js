const { text } = require("body-parser");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const InfoSchema = new Schema({
 name: String,
 email: String,
 contact: String,
 address: String,
 postcode: String,
 ofstedRating: String,
 openingHours: String,
 openingTimes: String,
 password: String,
 writeUp: String,
 website: String,
 fullTime: String,
 fullDay: String,
 halfDay: String,
 firstAidTrained: false,
 ofsted: String,
 firstAid: String,
 CCTV: String,
 bankHoilday: String,
 fifteenHours: String,
 thirtyHours: String,
 terms: false,
 date: {
    type: Date,
    default: Date.now,
   },
});

mongoose.model("info", InfoSchema, "info");
