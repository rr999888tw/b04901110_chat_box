var router = require('./ver1');
var express = require('express');
var app = express();

app.use(express.static(`${__dirname}/build`));
app.use('/users', router)


console.log(`${__dirname}/build`);
app.listen(4500);   