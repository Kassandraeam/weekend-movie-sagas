const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const movieRouter = require('./routes/movie.router.js')
const genreRouter = require('./routes/genre.router.js')
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/api/movie', movieRouter);
app.use('/api/genre', genreRouter)

// I think I need another Route. Dane said that the way I know that I need to make another route is when I need access to a table.

// What I need right now are the details of the specific movie??? 

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});
