// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let comments = [];

// Endpoint to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Endpoint to add a new comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.status(201).json(comment);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});