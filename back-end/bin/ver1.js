var express = require('express')
var bodyParser = require('body-parser');

// var app = express();
var router = express.Router()

// router.use('/', ()=> {console.log("2!!!")})
// router.use(bodyParser.json());

router.use('/', function (request, response) {
    console.log(request.body);      // your JSON
    console.log("!!!!!!!!!!!")
    response.setHeader("Access-Control-Allow-Origin", '*');
    response.json({text: "hello"});    // echo the result back
});

module.exports = router;