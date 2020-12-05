const mongoose = require('mongoose');
const Info = mongoose.model('info');

module.exports = (app) => {
  app.get(`/api/info`, async (req, res) => {
    const nursery = await Info.find();
    console.log(nursery)
    return res.status(200).send(nursery);
  });

  app.post(`/api/info`, async (req, res) => {
    const info = await Info.create(req.body);
    return res.status(201).send({
      error: false,
      info,
    });
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
