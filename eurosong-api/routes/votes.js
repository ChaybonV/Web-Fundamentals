// --------------------------------------------
// Import Packages
// --------------------------------------------
const express = require('express');
const router = express.Router();

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// --------------------------------------------
// [GET] vote 
// return list of votes
// --------------------------------------------
router.get('/', async(req, res) => {
  const votes = await prisma.votes.findMany();
  res.json(votes);
})

// --------------------------------------------
// [POST] vote 
// return id (id can be null, in which case it didn't work)
// --------------------------------------------
router.post('/', async(req, res) => {
  const songId = req.body.song_id;
  const points = req.body.points;

  const checkSongExists = await prisma.votes.findMany({
    where: {
      song_id: songId
    }
  });

  if (checkSongExists.length > 0) {
    res.json({ 
      "status": "combination already exists" 
    });
  } else {
    const newVote = await prisma.votes.create({
      data: {
        song_id: songId,
        points: points
      }
    });
    res.json(newVote);
  }
});

module.exports = router;