var http = require('http');
var url = require('url');
var query = require('./query');
var express = require('express');
var app = express();
var port = process.env.PORT || 5555;
var bodyParser = require('body-parser');
var fs = require("fs");
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.listen(process.env.PORT || 5555);


app.get('/item/:id', function(req, res) {
    const search = "select * from products where barcode = " + req.params.id
    query.execute(search, function(returnVal) {
        console.log(returnVal);
        res.write(JSON.stringify(returnVal));
        res.end();
    });
});

app.get('/items', function(req, res) {
    const search = "select * from products"
    query.execute(search, function(returnVal) {
        console.log(returnVal);
        res.write(JSON.stringify(returnVal));
        res.end();
    });
});



