var express = require('express');
var app = express();

app.get(['/', '/index.html'], (req, res) => {
    res.send('Hello Docker');
});

app.listen(80);