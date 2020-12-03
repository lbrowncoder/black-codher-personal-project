const mongoose = require('mongoose');
const Info = mongoose.model('info');



module.exports = (app) => {
  app.get(`/api/user`, async (req, res) => {
    const persons = await Info.find();
    console.log(persons)
    return res.status(200).send(persons);
  });

  app.post(`/api/user`, async (req, res) => {
    const user = await Info.create(req.body);
    return res.status(201).send({
      error: false,
      user,
    });
  });

  app.put(`/api/user/:id`, async (req, res) => {
    const { id } = req.params;

    const user = await Info.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      user,
    });
  });

  app.delete(`/api/user/:id`, async (req, res) => {
    const { id } = req.params;

    const user = await Info.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      user,
    });
  });
};
