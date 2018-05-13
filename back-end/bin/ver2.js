var router = require('./ver1');
var express = require('express');
var app = express();


app.use('/users', router)

app.listen(4500);   