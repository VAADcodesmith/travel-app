const express = require('express');
const path = require('path');
//not sure if cookie parser needs to be in server or api or both so stay tuned
const cookieParser = require('cookie-parser');

const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');

const router = express.Router();

router.get('/')