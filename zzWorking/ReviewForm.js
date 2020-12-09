const { error } = require('console');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI ||
    `http://localhost:5000/api/review`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//Schema
const Schema = mongoose.Schema;
const ReviewSchema = new Schema({
    name: String,
    email: String,
    number: Number,
    ReviewComment: String,
});

//model
const Review = mongoose.model('Review', ReviewSchema)

// .save()

const newReview = new Review(saveReview);

app.get(`/api/info`, async (req, res) => {
    const nursery = await Info.find();
    console.log(nursery)
    return res.status(200).send(nursery);
  });

  Review.find({ })
  .then((saveReview) => {
      console.log( 'saveReview', saveReview);
      res.json(saveReview);
  })
  .catch((error) => {
      console.log ('error', error);
  });


// newReview.save((error)) => {
//     if(error) {
//         console.log('Unable to submitt review');
//     } else {
//         console.log('Thank you for your review');
//     }
//     };
