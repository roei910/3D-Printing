const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();

app.use(express.static('public')); //using static view engine, using html files
app.use(express.urlencoded({ extended: true}));

app.set('view engine', 'ejs'); //using dynamic view engine, using ejs from views folder
app.use(logger);

// app.get('/', (req, res) => {
//     // res.send('welcome');
//     // res.status(200).send('Welcome');
//     // res.status(200).json({ 'success': true });
//     // res.json({ 'success': true }); //sends a status 200 as default
//     // res.download('index.js');
//     res.render('index', { name: 'roei'});
// }); //for using dynamic views with ejs

// app.get('/', logger, logger, logger ,(req, res) => {
//     res.render('index', { name: 'roei'});
// }); //running a certain request with specific logger, you can run multiple loggers like showed above

const userRouter = require('./routes/users');

app.use('/users', userRouter);

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

app.listen(port, (req, res) => {
    console.log(`app listening on port ${port}`);
})
