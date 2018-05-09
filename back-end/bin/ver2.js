var router = require('./ver1');
var express = require('express');
var app = express();

// ...

// app.use('/birds', birds);


// app.use(bodyParser.json());
// app.use('/users', function (request, response) {
//     // console.log(request.headers);      // your JSON

//     response.setHeader("Access-Control-Allow-Origin", '*');
//     response.json({ text: "hello" });    // echo the result back
// });

// app.use('/users', () => { console.log("!!!1") })
app.use('/users', router)

app.listen(4500);