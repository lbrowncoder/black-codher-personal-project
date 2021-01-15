const { response, request } = require('express');
const express = require('express')
const routes = express.Router()
const mongoose = require ('mongoose');


const ContactSchema = new mongoose.Schema({
    name: {
        type:String, 
        unique: true,
      required: true},
    email:{
        type: String,
        unique:true,
        required: true,
    },
    message:{
      type: String,
      unique:true,
      required: true,
  },
  date: {
      type: Date,
      default: Date.now
  }
  })
  
  const Contact = mongoose.model('Contact', ContactSchema)
  
  module.exports = Contact