var express = require('express');
var app = express();

require("./data/db")();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
        "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

const port = process.env.PORT || '3000';
app.set('port', port);


app.get('',function(req, res) {
    res.send('<h1>Whiteboard RESTful Services<h1>');
});

require('./data/services/user.services')(app);

app.listen(port);

