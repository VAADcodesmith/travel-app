const express = require('express');
const path = require('path');

const apiController = require('../controllers/apiController');

const router = express.Router();

router.use('/', apiController.getStateData, (req, res) => {
    console.log(res.locals.response)
    return res.status(200).json(res.locals.response)
});


module.exports = router;
