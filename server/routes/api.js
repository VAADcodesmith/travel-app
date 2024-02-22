const express = require('express');
const path = require('path');

const userController = require('../controllers/userController');
const apiController = require('../controllers/apiController');

const router = express.Router();


router.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../../src/components/Login.jsx' ))
});

router.get('/signup', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../../src/components/Signup.jsx'))
});


router.post('/signup', userController.createUser, (req, res) => {
    return res.status(200).json({ redirect: './map' })
});

router.post('/login', userController.verifyUser, (req, res) => {
    return res.status(200).json({ redirect: './map' })
});

router.get('/map/api/:stateName', apiController.getStateData, (req, res) => {
    const { stateName } = req.params;
    console.log(stateName)
    console.log(req.params)
    // return res.status(200).sendFile(path.resolve(__dirname, '../../src/components/Map.jsx'))
    // return fetched data in response
    return res.status(200).json({hello: 'test'})
});

router.get('/map', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../../src/components/Map.jsx'))
});


