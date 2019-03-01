const express = require('express');
const userStrategy = require('../strategies/sql.localstrategy');
const pool = require('../modules/pool.js');
const router = express.Router();

router.post('/', (request, response) => {
    if (request.isAuthenticated()) {
      const entry = request.body.entry;
      console.log("scoring router = ", entry);
      let sqlText = `INSERT INTO new_data 
      (id, data_date, physical_activity_value, physical_activity_score, age_value, age_score, bp_score, diastolic_value, family_history_value, family_history_score, gender, height_value, inactivity_value, inactivity_score, nicotine_value, nicotine_score, sleep_value, sleep_score, stress_management_value, stress_score, systolic_value, total_stress_value, waist_value, waist_score, weight_value, acsm_value, acsm_score, well_score)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28)`;
      pool.query(sqlText, [entry.id, entry.data_date, entry.physical_activity_value, entry.physical_activity_score, entry.age_value, entry.age_score, entry.bp_score, entry.diastolic_value, entry.family_history_value, entry.family_history_score, entry.gender, entry.height_value, entry.inactivity_value, entry.inactivity_score, entry.nicotine_value, entry.nicotine_score, entry.sleep_value, entry.sleep_score, entry.stress_management_value, entry.stress_score, entry.systolic_value, entry.total_stress_value, entry.waist_value, entry.waist_score, entry.weight_value, entry.acsm_value, entry.acsm_score, entry.well_score])
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