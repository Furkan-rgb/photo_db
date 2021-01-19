//https://create-react-app.dev/docs/deployment/
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'storygram')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'storygram', 'index.html'));
});

app.listen(3000);