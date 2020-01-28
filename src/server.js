const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv').config();

const routes = require('./routes');

const app = express();

app.get('/', (req, res) => {
  res.send("Olá você");
});

app.use(express.json());
app.use(routes);

// DB connection
mongoose.connect(process.env.DB_CONNECT,{ 
	useNewUrlParser: true, 
	useUnifiedTopology: true
}, console.log('Conneted do db')
);

app.listen(3333);

