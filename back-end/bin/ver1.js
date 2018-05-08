var express = require('express')
    , bodyParser = require('body-parser');

// var app = express();
var router = express.Router()

router.use(bodyParser.json());


const a = {
  title: "The Basics - Networking",
  description: "Your app fetched this from a remote endpoint!",
  movies: [
    { title: "Star Wars", releaseYear: "1977"},
    { title: "Back to the Future", releaseYear: "1985"},
    { title: "The Matrix", releaseYear: "1999"},
    { title: "Inception", releaseYear: "2010"},
    { title: "Interstellar", releaseYear: "2014"}
  ]
}

router.use('/users', function (request, response) {
    // console.log(request.headers);      // your JSON
    
    response.setHeader("Access-Control-Allow-Origin", '*');

    response.json(a);    // echo the result back
});

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
})
// define the home page route
router.get('/', function (req, res, next) {
    // res.send('Birds home page')
    console.log('middleware 1');
    next();
})
// define the about route
router.get('/about', function (req, res, next) {
    res.send('About birds');
})

module.exports = router;



// app.listen(3000);