const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('welcome');
});

app.listen(port, (req, res) => {
    console.log(`app listening on port ${port}`);
})
