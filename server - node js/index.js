const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.send('welcome');
    // res.status(200).send('Welcome');
    // res.status(200).json({ 'success': true });
    // res.json({ 'success': true }); //sends a status 200 as default
    // res.download('index.js');
    res.render('index', { name: 'roei'});
});

const userRouter = require('./routes/users');

app.use('/users', userRouter);

app.listen(port, (req, res) => {
    console.log(`app listening on port ${port}`);
})
