const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("./models/nurseryInfo");

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
 process.env.MONGODB_URI ||
  `mongodb://localhost:27017/black-codher-personal-project`,
 {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 }
);

app.use(bodyParser.json());

require("./routes/usersRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
 console.log(`app running on port ${PORT}`);
});
