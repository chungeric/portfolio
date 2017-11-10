const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/packages', express.static(__dirname + '/node_modules/'));
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.render('index.html');
});

app.listen(app.get('port'), function() {
    console.log("express: listening on port 3000")
});
