const express = require('express');
const path = require('path');
const router = require('./routes/controller');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.all('/*', function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use('/', router);

app.listen(port, () => console.log(`Listening on port ${port}`));