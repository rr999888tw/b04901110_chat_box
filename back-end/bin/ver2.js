var birds = require('./ver1');
var express = require('express');
var app = express();

// ...

app.use('/birds', birds);
app.listen(3001);