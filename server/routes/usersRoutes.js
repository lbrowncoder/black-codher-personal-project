const mongoose = require('mongoose');
const Info = mongoose.model('info');

//Schema
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

  app.post(`/api/info`, async (req, res) => {
    const info = await Info.create(req.body);
    return res.status(201).send({
      error: false,
      info,
    });
  });

  app.post("/api/review", (req, res) => {
    // console.log(req.body)
    let myData = new Review(req.body);
    myData.save()
    .then(item => {
      res.send("Review has been submitted");
    })
    .catch(err => {
      res.status(400).send("Unable to submit review");
    });
  });

  app.get("/api/review", async (req, res) => {
      const submittedReview = await Review.find({},
        {reviewComment:1, _id:0},
        {name:1, _id:0});
      return res.status(200).send(submittedReview);
    });


  app.put(`/api/info/:id`, async (req, res) => {
    const { id } = req.params;
    const info = await Info.findByIdAndUpdate(id, req.body);
    return res.status(202).send({
      error: false,
      info,
    });
  });

  app.delete(`/api/info/:id`, async (req, res) => {
    const { id } = req.params;

    const info = await Info.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      info,
    });
  });
};

