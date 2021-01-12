const { response, request } = require('express');
const express = require('express')
const routes = express.Router()
const mongoose = require ('mongoose');
// const SignUpSchema = require('../models/SignUpModels')

// app.post( '/api/users', (req, res) =>{
//     const user = new SignUpSchema({
//         name:request.body.name,
//         email: request.body.email,
//         password: request.body.password
//      })
//      user.save()
//      .then(data => {
//          response.json(data)
//      })
//      .catch (error => {
//          response.json(error)
//      })
// })


const SignUpSchema = new mongoose.Schema({
  name: {
      type:String, 
      unique: true,
    required: true},
  email:{
      type: String,
      unique:true,
      required: true,
  },
  password:{
    type: String,
    unique:true,
    required: true,
},
date: {
    type: Date,
    default: Date.now
}
})

const SignUp = mongoose.model('Users', SignUpSchema)

module.exports = SignUp