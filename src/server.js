const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/', (req, res) => {
  res.send("Olá você");
})

app.post('/home', verifyToken, (req, res) => {
	res.send('Home')
})

app.post('/login', (req, res) => {
  const user = {
    id: 1,
    username: 'brad',
    email: 'brad@gmail.com'
  };

	jwt.sign({user}, 'secretkey', (err, token) => {
    res.json({
			token
    });
	});
	
})

// Token format
// Authorization: Bearer <access_token>



function verifyToken(req, res, next) {
	// Get auth header value
	const bearerHeader = req.headers['authorization'];
	// Check if bearer is undefined 
	if(typeof bearerHeader !== 'undefined') {
		
	} else {	
		// Forbidden
		res.sendStatus(403);
	}

}
;;;
app.listen(3333);

