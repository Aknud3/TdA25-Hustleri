const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api')

router.get('/', apiController.getAPI)

module.exports = router