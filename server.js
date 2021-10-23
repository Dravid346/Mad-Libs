'use strict';

const PORT = 3444;
const express = require('express');
const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('public'));


app.get('/output', (req, res) => {
    res.send(`Once upon a time, there was a family of ${req.query.plural}. The ${req.query.plural} liked 
    to ${req.query.verb} with their neighbors. But one day, a(n) ${req.query.adjective} ${req.query.noun1} 
    attacked one of the ${req.query.plural} and injured their ${req.query.noun2}, and they couldn't 
    ${req.query.verb} anymore. The end.`);
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});