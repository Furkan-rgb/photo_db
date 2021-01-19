//https://create-react-app.dev/docs/deployment/
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'storygram')));
//Redirect any request to any adress from the user to index.html
// Prevents 404 page not found on refresh
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'storygram', 'index.html'));
});

app.listen(3000);