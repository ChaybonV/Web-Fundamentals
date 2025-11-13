// import from node_modules
const express = require('express')
const cors = require('cors');
const app = express()

app.use(cors());
app.use(express.json());
console.log("API IS UP AND RUNNING, BABY....")

// Endpoints 
const artistsRouter = require('./routes/artists');
const countriesRouter = require('./routes/countries');
const goatsRouter = require('./routes/goats');
const rankingRouter = require('./routes/ranking');
const songsRouter = require('./routes/songs');
const votesRouter = require('./routes/votes');

app.use('/artists', artistsRouter);
app.use('/countries', countriesRouter);
app.use('/goats', goatsRouter);
app.use('/ranking', rankingRouter);
app.use('/songs', songsRouter);
app.use('/votes', votesRouter);

app.listen(3000)