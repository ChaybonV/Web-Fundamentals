// --------------------------------------------
// Import Packages
// --------------------------------------------
const express = require('express');
const router = express.Router();

// --------------------------------------------
// [GET] artists 
// return array of artists
// --------------------------------------------

router.get('/', (req, res) => { 
  // @todo: Link to database
  res.json([]);
})

// --------------------------------------------
// [POST] artists 
// return id (id can be null, in which case it didn't work)
// --------------------------------------------

router.post('/', (req, res) => { 
  //@todo: link to database
  //req.body
  res.send("Added artists");
})

// --------------------------------------------
// [DELETE] artists 
// return boolean (true or false)
// --------------------------------------------

router.delete('/:id', (req, res) => {
  //@todo: Link to database
  console.log("Deleted artists");
})

// --------------------------------------------
// [PUT] artists 
// return boolean (true or false)
// --------------------------------------------

router.put('/:id', (req, res) => {
  //@todo: Link to database
  //req.body
  res.send("Updated artists");
})

/*router.get('/:id', (req, res) => {
  let selectedGoat = null;
  goats.forEach((goat) => {
    if(goat.id == req.params.id){
      selectedGoat = goat;
    }
  })
  //console.log(req.params.id);
  res.json(selectedGoat);
})*/

module.exports = router;