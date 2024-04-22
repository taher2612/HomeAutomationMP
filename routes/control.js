const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/tokenVerifier');
const controlsController = require('../controller/control');

// router.get('/', verifyToken,controlsController.getAppliances);

// router.post('/room-status', verifyToken,controlsController.getRoomStatus);

// => GET : /control/spaces
router.get('/spaces', verifyToken, controlsController.getSpaces);

// => GET : /control/rooms
router.get('/rooms', verifyToken, controlsController.getRooms);

// => GET : /control/appliances
router.get('/appliances', controlsController.getAppliances);


module.exports = router;