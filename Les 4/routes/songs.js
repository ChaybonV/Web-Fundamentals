// -------------------------
// Import packages
// -------------------------
const express = require('express');
const router = express.Router();

// -------------------------
// [GET] Songs 
// return array of songs
// -------------------------
router.get('/', (req, res) => {
  // @todo: link to database
  res.json([]);
})

// -------------------------
// [POST] Songs 
// return id (id kan ook null zijn, niet gelukt )
// -------------------------
router.post('/', (req, res) => {
    // @todo: link to database
    // req.body -> om data uit een post te halen
    res.send("Added Songs");
})

// -------------------------
// [DELETE] Songs 
// return boolean (true or false )
// -------------------------
router.delete('/:id', (req, res) => {
  // @todo: link to database
  res.send("Deleted Songs");
})

// -------------------------
// [PUT] Songs 
// return boolean (true or false )
// -------------------------
router.put('/:id', (req, res) => {
  // @todo: link to database
  // req.body -> om data uit een put te halen
  res.send("Updated Songs");
})

module.exports = router;
