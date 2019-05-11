const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const db = require('../database');

const app = express();

app.use(express.static('dist'));
app.use(bodyParser.json());

app.listen(1234, () => console.log('Listening on 1234!!!'));


//Saving a posted tweet to Database..
app.post('/post_tweet', (req, res) => {
  console.log(req.body);
  let {username, tweet} = req.body;
  let query = `INSERT INTO tweets(username, tweet) VALUES('${username}', '${tweet}');`;
  db.query(query, (err) => {
    if(err) {
      console.log(err);
      res.status(500).send('Error posting tweet to database.');
    } else {
      console.log('Success posting to database!');
      res.status(200).send('Success! Posted tweet to database.');

    }
  });
});

//Client getting tweets from Database..
app.get('/get_tweets', (req, res) => {

  let query = `SELECT * FROM tweets ORDER BY id DESC LIMIT 25`
  db.query(query, (err, tweets) => {
    if (err) {
      console.log('Error pulling tweets from database..', err.code, err.sqlMessage, err.message);
      res.status(500).send(err)
    } else {
      console.log('Got freshest 25 tweets baby!', tweets);
      res.status(200).send(tweets);
    }
  })
})

