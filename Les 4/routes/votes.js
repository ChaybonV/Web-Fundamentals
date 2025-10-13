// --------------------------------------------
// Import Packages
// --------------------------------------------
const express = require('express');
const router = express.Router();

// --------------------------------------------
// [POST] vote 
// return id (id can be null, in which case it didn't work)
// --------------------------------------------

router.post('/', (req, res) => { 
  //@todo: link to database
  //req.body
  res.send("Added vote");
})


module.exports = router;