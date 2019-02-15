const express = require('express');
const userStrategy = require('../strategies/sql.localstrategy');
const pool = require('../modules/pool.js');
const router = express.Router();

router.post('/', (request, response) => {
    if (request.isAuthenticated()) {
      const entry = request.body.entry;
      console.log('router entry = ', entry);
      let sqlText = `INSERT INTO participant_info 
      (id, disclaimer)
      VALUES ($1, $2)`;
      pool.query(sqlText, [entry.id, entry.disclaimer])
      .then((result) => {
     // console.log('Added entry:', result);
      response.sendStatus(201);
    }).catch((error) => {
    //  console.log('Error posting entry:', error);
      response.sendStatus(500);
    })
  } else {
    response.sendStatus(403);
  }
  }); // end POST









module.exports = router;