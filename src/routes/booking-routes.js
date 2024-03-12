const express= require("express");
const {BookingController} = require("../controllers/index");

const router= express.Router();

router.post('/booking', BookingController.bookRoom);
router.post('/checkBooking', BookingController.checkBooking);
router.post('/bookigDetails', BookingController.sendUserData);
router.patch('/booking', BookingController.updateDetails);
router.patch('/deleteBooking', BookingController.deleteDetails);
router.get('/bookings', BookingController.getAllBookingDetails);

module.exports= router;