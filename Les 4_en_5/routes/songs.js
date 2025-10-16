// -------------------------
// Import packages
// -------------------------
const express = require('express');
const router = express.Router();

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// -------------------------
// [GET] Songs 
// return array of songs
// -------------------------
router.get('/', async(req, res) => {
  const songs = await prisma.songs.findMany({
    include: {
      artists: true
    }
  })
  res.json(songs)
})

// -------------------------
// [POST] Songs 
// return id (id kan ook null zijn, niet gelukt )
// -------------------------
router.post('/', async(req, res) => {
    const artistId = req.body.artist_id;
    const songName = req.body.name;

    // Bestaat de combinatie? 
    const combinationCheck = await prisma.songs.findMany({
      where:{
        artist_id: artistId,
        name: songName
      }
    })

    if(combinationCheck.length>0){
      res.json({
        "status": "combination already exists"
      });
    }
    else{
      const newSong = await prisma.songs.create({
            data:{
              artist_id: artistId,
              name: songName
            }
          });
        res.send(newSong);
    }
});

// -------------------------
// [DELETE] Songs 
// return boolean (true or false )
// -------------------------
router.delete('/:id', async (req, res) => {
  const songId = req.params.id;

  const deletedSong = await prisma.songs.delete({
    where: {
      song_id: parseInt(songId)
    }
  });

  res.send(deletedSong);
})

// -------------------------
// [PUT] Songs 
// return boolean (true or false )
// -------------------------
router.put('/:id', async (req, res) => {
  let songId = req.params.id;
  let name = req.body.name;
  let artistId = req.body.artist_id;

  let updatedSong = await prisma.songs.update({
    where: {
      song_id: parseInt(songId)
    },
    data: {
      name: name,
      artist_id: parseInt(artistId)
    }
  })

  res.json(updatedSong);
})

module.exports = router;