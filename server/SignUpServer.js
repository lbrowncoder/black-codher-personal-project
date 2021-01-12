const express = require('express');
const app = express();
const mongoose = require ('mongoose');
const routesURls = require ('./routes');
const cors = require('cors');


mongoose.connect(
    process.env.MONGODB_URI ||
      `mongodb://localhost:27017/black-codher-personal-project`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  
app.use(express.json()) 
app.use(cors())
app.use('/api', routesURls)
app.listen(4000, () => console.log("Server is running"))