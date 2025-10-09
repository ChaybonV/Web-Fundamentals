// -------------------------
// Import packages
// -------------------------
const express = require('express');
const router = express.Router();

// -------------------------
// [GET] Ranking 
// return array of ranking
// -------------------------
router.get('/', (req, res) => {
  // @todo: link to database
  res.json([]);
})

module.exports = router;
