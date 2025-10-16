// -------------------------
// Import packages
// -------------------------
const express = require('express');
const router = express.Router();

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// -------------------------
// [GET] Artists 
// return array of artists
// -------------------------
router.get('/', async(req, res) => {
  const artists = await prisma.artists.findMany();
  res.json(artists);
})

// -------------------------
// [POST] Artists 
// return id (id kan ook null zijn, niet gelukt )
// -------------------------
router.post('/', async(req, res) => {
  const artistName = req.body.name;

  const checkArtistExists = await prisma.artists.findMany({
    where:{
      name: artistName
    }
  })

  if(checkArtistExists.length>0){
    res.json({
      "status":"artist already in database"
    })
  } 
  else{
    const newArtist = await prisma.artists.create({
          data:{
            name: artistName
          }
        })
      res.json(newArtist);
  }
  
})

// -------------------------
// [DELETE] Artists 
// return boolean (true or false )
// -------------------------
router.delete('/:id', async (req, res) => {
  const artistId = req.params.id;

  const deletedArtist = await prisma.artists.delete({
    where: {
      artist_id: parseInt(artistId)
    }
  });

  res.send(deletedArtist);
})

// -------------------------
// [PUT] Artists 
// return boolean (true or false )
// -------------------------
router.put('/:id', async (req, res) => {
  let artistId = req.params.id;
  let name = req.body.name;

  let updatedArtist = await prisma.artists.update({
    where: {
      artist_id: parseInt(artistId)
    },
    data: {
      name: name
    }
  })

  res.json(updatedArtist);
})

module.exports = router;