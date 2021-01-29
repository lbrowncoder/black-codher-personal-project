const mongoose = require("mongoose");
const Info = mongoose.model("info");
const SignUp = require("../routes");
const Contact = require("./contactRoutes");

// Main Schema
const Schema = mongoose.Schema;
const ReviewSchema = new Schema({
 name: String,
 email: String,
 number: Number,
 reviewComment: String,
 date: {
  type: Date,
  default: Date.now
}
});

// Model
const Review = mongoose.model("Review", ReviewSchema);

module.exports = (app) => {
 app.get(`/api/info`, async (req, res) => {
  const nursery = await Info.find();
  return res.status(200).send(nursery);
 });

 // Update nursery json
 app.post(`/api/info`, async (req, res) => {
  const info = await Info.create(req.body);
  return res.status(201).send({
   error: false,
   info,
  });
 });

  // Update id of nursery json file
  app.put(`/api/info/:id`, async (req, res) => {
    const { id } = req.params;
    const info = await Info.findByIdAndUpdate(id, req.body);
    return res.status(202).send({
     error: false,
     info,
    });
   });
  
   // Delete nursery from json using ID
   app.delete(`/api/info/:id`, async (req, res) => {
    const { id } = req.params;
    const info = await Info.findByIdAndDelete(id);
    return res.status(202).send({
     error: false,
     info,
    });
   });

  // Get nursery by id
 app.get(`/api/info/:id`, async (req, res) => {
  let id = req.params.id;
  const info = await Info.findById(id, function (err, todo) {
   res.json(todo);
  });
 });

 // Post to review
 app.post("/api/review", (req, res) => {
  let myData = new Review(req.body);
  myData
   .save()
   .then((item) => {
    res.send("Review has been submitted");
   })
   .catch((err) => {
    res.status(400).send("Unable to submit review");
   });
 });

 // Get review posted
 app.get("/api/review", async (req, res) => {
  const submittedReview = await Review.find(
   {},
   { reviewComment: 1, _id: 0, name: 1 }
  );
  return res.status(200).send(submittedReview);
 });

 // post to contacts
 app.post(`/api/contacts`, async (req, res) => {
  const contact = await Contact.create(req.body);
  contact
   .save()
   .then((item) => {
    res.status(201).send({
     error: false,
     contact,
    });
   })
   .catch((err) => {
    res.status(400).send("please try again");
   });
 });

//  get contacts
 app.get(`/api/contact`, async (req, res) => {
  const allContacts = await Contact.find();
  return res.status(200).send(allContacts);
 });


 // Add new user
 app.post(`/api/users`, async (req, res) => {
  const user = await SignUp.create(req.body);
  user
   .save()
   .then((item) => {
    res.status(201).send({
     error: false,
     user,
    });
   })
   .catch((err) => {
    res.status(400).send("Unable to submit review");
   });
 });

 // Get users
 app.get(`/api/users`, async (req, res) => {
  const allUsers = await SignUp.find();
  console.log(allUsers);
  return res.status(200).send(allUsers);
 });
};
