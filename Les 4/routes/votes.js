// -------------------------
// Import packages
// -------------------------
const express = require('express');
const router = express.Router();

// -------------------------
// [POST] Votes 
// return id (id kan ook null zijn, niet gelukt )
// -------------------------
router.post('/', (req, res) => {
    // @todo: link to database
    // req.body -> om data uit een post te halen
    res.send("Added vote");
})

module.exports = router;
