//import mapStoreToProps from '../../redux/mapStoreToProps';





const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 */
router.put('/',  (req, res) => {
  console.log('in PUT');
  
  let health = req.body; // Book with updated content
  
  let id = req.params.id; // id of the book to update
// console.log('Updating', health.title);
console.log(health);

  //console.log(`Updating book ${id} with `, book);
let queryText = `UPDATE "veteran"
SET "injury_id" = $1
WHERE "id" = $2;`;

  // TODO - REPLACE BELOW WITH YOUR CODE
  pool.query(queryText, [health.injury_id,]).then( (result) => {
            // Delete sends back an OK status, 
            // client will then ask for all the data with a GET
            res.sendStatus(200);
        })
        .catch( (error) => {
            console.log('Error from db:', error);
            res.sendStatus(500);
        })

});






    module.exports = router;