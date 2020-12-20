const ftmongoose = require('mongoose');
const Feature = mongoose.model('feature');

//feature Schema
const featureSchema = mongoose.FTSchema;
const FTSchema = new Schema({
    name: String,
});


const FT = mongoose.model('FT', featureSchema)

module.exports = (app) => {
    app.get(`/api/feature`, async (req, res) => {
        console.log(featuredNursery)
      const featuredNursery = await Feature.find();
    return res.status(200).send(featuredNursery);
  });

}