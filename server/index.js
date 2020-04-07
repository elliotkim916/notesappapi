// this is where I import middleware, routers, connect to db & then listening to the server
'use strict';

require('dotenv').config();
const express = require('express');
// const mongoose = require('mongoose');
const app = express();
const { PORT } = require('../config');
const connectToDb = require('../db');
const noteRouter = require('./routes/noteRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.use('/api/notes', noteRouter);

connectToDb()
  .then(() => {
    app.listen(PORT);
    console.log(`Listening on PORT ${PORT}`);
  })
  .catch((e) => console.log(e));