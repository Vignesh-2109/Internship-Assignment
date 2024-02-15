
const express = require('express');
const router = express.Router();

const user_routes = require('./user_routes');
const admin_routes = require('./Admin_routes');
router.use('/api/user',user_routes);
router.use('/api/admin', admin_routes);
router.get('/api', function(req, res){
  res.send('Hello World');
})
router.get('/', function(req, res) {
  console.log('working'); 
    res.status(200).json({
        message:'working fine',

    })
})

module.exports = router;