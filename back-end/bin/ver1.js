var express = require('express')
var bodyParser = require('body-parser');

// var app = express();
var router = express.Router()

// router.use('/', ()=> {console.log("2!!!")})
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

let a = [
    { type: 'text', author: "me", data: { text: "Why don't they have salsa on the table?" } },
    { type: 'text', author: "them", data: { text: "What do you need salsa for?" } },
    { type: 'text', author: "me", data: { text: "Salsa is now the number one condiment in America." } },
    { type: 'text', author: "them", data: { text: "You know why? Because people like to say 'salsa.' 'Excuse me, do you have salsa?' 'We need more salsa.' 'Where is the salsa? No salsa?'" } },
    { type: 'text', author: "me", data: { text: "You know it must be impossible for a Spanish person to order seltzer and not get salsa. 'I wanted seltzer, not salsa.'" } },
    { type: 'text', author: "them", data: { text: "Don't you know the difference between seltzer and salsa?? You have the seltezer after the salsa!" } },
    { type: 'text', author: "me", data: { text: "See, this should be a show. This is the show. " } },
    { type: 'text', author: "them", data: { text: "What?" } },
    { type: 'text', author: "me", data: { text: "This. Just talking." } },
    { type: 'text', author: "them", data: { text: "Yeah, right." } },
    { type: 'text', author: "me", data: { text: "I'm really serious. I think that's a good idea. " } },
    { type: 'text', author: "them", data: { text: "Just talking? Well what's the show about?" } },
    { type: 'text', author: "me", data: { text: "It's about nothing." } },
    { type: 'text', author: "them", data: { text: "No story?" } },
    { type: 'text', author: "me", data: { text: "No forget the story. " } },
    { type: 'text', author: "them", data: { text: "You've got to have a story." } },
    { type: 'emoji', author: "me", data: { emoji: "😋" } },
]

router.get('/:user/:personInTalk', function (request, response) {
    // console.log(request.body);      // your JSON
    response.setHeader("Access-Control-Allow-Origin", '*');
    response.json(a)
    // response.json({text: "hello"});    // echo the result back
});

router.post('/update', function (req, res) {

    console.log('registering user');
    let reqBody = req.body;
    console.log(reqBody);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    res.json(req.body);

});

module.exports = router;