const express = require('express');
// const quotes = require('./public/scripts/quotes')
const bodyParser = require('body-parser')
const app = express(); //makes a server app
const port = process.env.PORT || 5001;

app.use(express.static('server/public'));//place above app.listen
// respond with assets
app.use(bodyParser.urlencoded({ extended: true }))

const quotes = require('./quotes')

app.get('/quotes', function(req, res){
    let responseString = 'howdy';
    console.log(quotes.length);
    
    res.send(quotes);
  })

  app.post('/quotes', function(req, res){
    console.log('req.body', req.body);
    res.sendStatus(201);
    console.log('before');
      quotes.push(req.body)
  })

// allow for incoming request
app.listen(port, function (){
    console.log('app is running on', port)
})