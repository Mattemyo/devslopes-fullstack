const express = require('express'), app = express(), bodyParser = require('body-parser'), mongoose = require('mongoose'), db = mongoose.connect('mongodb:localhost/swag-shop');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false});





app.listen(3000, () => {
    console.log('App listening on port 3000!');
});

