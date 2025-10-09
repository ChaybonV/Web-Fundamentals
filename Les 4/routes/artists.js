// -------------------------
// Import packages
// -------------------------
const express = require('express');
const router = express.Router();

// -------------------------
// [GET] Artists 
// return array of artists
// -------------------------
router.get('/', (req, res) => {
  // @todo: link to database
  res.json([]);
})

// -------------------------
// [POST] Artists 
// return id (id kan ook null zijn, niet gelukt )
// -------------------------
router.post('/', (req, res) => {
    // @todo: link to database
    // req.body -> om data uit een post te halen
    res.send("Added artists");
})

// -------------------------
// [DELETE] Artists 
// return boolean (true or false )
// -------------------------
router.delete('/:id', (req, res) => {
  // @todo: link to database
  res.send("Deleted artist");
})

// -------------------------
// [PUT] Artists 
// return boolean (true or false )
// -------------------------
router.put('/:id', (req, res) => {
  // @todo: link to database
  // req.body -> om data uit een put te halen
  res.send("Updated artist");
})

module.exports = router;
