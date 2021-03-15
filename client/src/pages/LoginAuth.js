import axios from "axios";
const express = require("express");

// login page- not working yet
axios.post("/api/login", async (req, res) => {
 const { email, password } = req.body;

 const userEmail = await User.findOne({ where: { email } }).catch((err) => {
  console.log(err);
 });

 if (!userEmail)
  return res.json({ message: "Email or password does not " });
match
 if (!userEmail.password !== password)
  return res.json({ message: "Email or password does not match" });
});
