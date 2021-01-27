const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("./models/nurseryInfo");
require("dotenv").config();

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
 process.env.MONGODB_URI ||
  `mongodb+srv://lbrown:Theloft0607@mern.wiwpv.mongodb.net/black-codher-personal-project?retryWrites=true&w=majority`,
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
