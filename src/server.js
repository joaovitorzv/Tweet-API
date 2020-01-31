const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const env = require('dotenv').config();

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


// DB connection
mongoose.connect(process.env.DB_CONNECT,{ 
	useNewUrlParser: true, 
	useUnifiedTopology: true,
	useCreateIndex: true
}, console.log('Conneted do db')
);

app.listen(3333);

