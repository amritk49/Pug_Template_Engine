const express = require('express');
const path = require('path');
const app = express();
const fs = require("fs");
const port = 8000;

// __________EXPRESS_SPECIFIC_STUFF__________

// serving static files
app.use('/static', express.static('static'));
app.use(express.urlencoded());

// __________PUG_SPECIFIC_STUFF______________

// set the template engine as pug
app.set('view engine', 'pug');

// set the views directory
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    const params = {};
    res.status(200).render('home.pug', params);
});

app.get('/contact', (req, res) => {
    const params = {};
    res.status(200).render('contact.pug', params);
});

app.listen(port, () => {
    console.log("Server running at port " + port);
});