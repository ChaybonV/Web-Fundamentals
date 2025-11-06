// --------------------------------------------
// Import Packages
// --------------------------------------------
const express = require('express');
const router = express.Router();

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// --------------------------------------------
// [GET] ranking 
// return array of ranking
// --------------------------------------------
router.get('/', async(req, res) => { 
  const ranking = await prisma.$queryRaw`
  SELECT 
    songs.name, artists.name, sum(votes.points) as totalpoints 
  FROM 
    votes INNER JOIN (songs INNER JOIN artists ON songs.artist_id = artists.artist_id) ON votes.song_id = songs.song_id 
  GROUP BY
    songs.song_id 
  ORDER BY
    totalpoints desc;
  `

  res.json(ranking);
})

module.exports = router;