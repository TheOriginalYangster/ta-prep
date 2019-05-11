const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static('dist'));
app.use(bodyParser.json());

app.listen(1234, () => console.log('Listening on 1234!!!'));

app.post('/post_tweet', (req, res) => {
  console.log(req.body);
  res.status(201).send('we got it');
})
