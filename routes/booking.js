const express =require('express');

const bookingController = require('../controllers/booking');

const router = express.Router();



router.get('/getusers',bookingController.getUsers);
router.post('/booking',bookingController.postBooking);
router.delete('/booking/:id',bookingController.postDelete);


module.exports = router;