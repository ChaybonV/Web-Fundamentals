// --------------------------------------------
// Import Packages
// --------------------------------------------
const express = require('express');
const router = express.Router();

// --------------------------------------------
// [GET] ranking 
// return array of ranking
// --------------------------------------------

router.get('/', (req, res) => { 
  // @todo: Link to database
  res.json([]);
})

module.exports = router;