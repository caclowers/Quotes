const express = require('express');
//const quotes = require('./quotes.js')

const app = express(); //makes a server app
const port = process.env.PORT || 5000;

app.use(express.static('server/public'));//place above app.listen
// respond with assets

let quotesArray = [{
    quote: 'Be the change you wish to see.',
    author: 'Gandhi'
}, {
    quote: 'Every moment is a fresh beginning.',
    author: 'T.S. Eliot'
}, {
    quote: 'Die with memories, not dreams.',
    author: 'Unknown'
}, {
    quote: 'All limitations are self-imposed.',
    author: 'Oliver Wendell Holmes'
}, {
    quote: 'There is no substitute for hard work.',
    author: 'Thomas Edison'
}, {
    quote: 'Boldness be my friend.',
    author: 'William Shakespeare'
}, {
    quote: 'If you’re going through hell, keep going.',
    author: 'Winston Churchill'
},{
    quote: 'Broken crayons still color.',
    author: 'Unknown'
},{
    quote: 'It does not matter how slowly you go as long as you do not stop.',
    author: 'Confucius'
},{
    quote: 'I bet giraffes don’t even know what farts smell like.',
    author: 'Bill Murray'
}];

app.get('/quotes', function(req, res){
    res.send(quotesArray);
    //res.send(quotesArray);
  })

// allow for incoming request
app.listen(port, function (){
    console.log('app is running on', port)
})