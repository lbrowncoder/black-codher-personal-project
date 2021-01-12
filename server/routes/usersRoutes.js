const mongoose = require('mongoose');
const Info = mongoose.model('info');
const SignUp = require('../routes');
// import SignUp from '../routes.js';



//Main Schema
const Schema = mongoose.Schema;
const ReviewSchema = new Schema({
    name: String,
    email: String,
    number: Number,
    reviewComment: String,
});

//model
const Review = mongoose.model('Review', ReviewSchema)


module.exports = (app) => {
    app.get(`/api/info`, async (req, res) => {
      const nursery = await Info.find();
    return res.status(200).send(nursery);
  });


//update nursery json
  app.post(`/api/info`, async (req, res) => {
    const info = await Info.create(req.body);
    return res.status(201).send({
      error: false,
      info,
    });
  });

  //post to review
  app.post("/api/review", (req, res) => {
    let myData = new Review(req.body);
    myData.save()
    .then(item => {
      res.send("Review has been submitted");
    })
    .catch(err => {
      res.status(400).send("Unable to submit review");
    });
  });
  
//get review posted
  app.get("/api/review", async (req, res) => {
    const submittedReview = await Review.find({},
      {reviewComment:1, _id:0, name:1})
    return res.status(200).send(submittedReview);
  });

//post contact
app.post(`/api/contact`, (req, res) => {
  let contact = new Contact(req.body);
  contact.save()
  .then (item => {
    res.send("Recieved")
  });
});
 
//update id of nursery json file
  app.put(`/api/info/:id`, async (req, res) => {
    const { id } = req.params;
    const info = await Info.findByIdAndUpdate(id, req.body);
    return res.status(202).send({
      error: false,
      info,
    });
  });

  //delete nursery from json using ID
  app.delete(`/api/info/:id`, async (req, res) => {
    const { id } = req.params;
    const info = await Info.findByIdAndDelete(id);
    return res.status(202).send({
      error: false,
      info,
    });
  });

//get nursery by id
app.get(`/api/info/:id`, async (req, res) => {
      let id = req.params.id;
      console.log('Id: ' + id);
      const info = await Info.findById(id, function(err, todo) {
        res.json(todo);
});
});



// add new user
app.post(`/api/users`, async (req, res) => {
  const user = await SignUp.create(req.body);
  return res.status(201).send({
    error: false,
    user,
  });
});
}