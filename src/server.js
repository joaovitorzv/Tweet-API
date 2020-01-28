const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

app.get('/', (req, res) => {
  res.send("Olá você");
});

app.use(express.json());
app.use(routes);
// DB connection

app.listen(3333);

