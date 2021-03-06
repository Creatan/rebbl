'use strict';
const db = require('../../lib/teamservice.js')
  , util = require('../../lib/util.js')
  , express = require('express')
  , router = express.Router();

router.get('/:teamId', util.checkCache, async function(req, res, next){
  let data =  await db.getTeamStats(req.params.teamId);


  res.render('rebbl/team/oldteam', data);
});

module.exports = router;