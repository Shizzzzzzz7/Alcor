const express= require("express");
const {BookingController} = require("../controllers/index");

const router= express.Router();

router.post('/booking', BookingController.bookRoom);
router.patch('/booking/:id', BookingController.updateDetails);
router.patch('/deleteBooking/:id', BookingController.deleteDetails);
router.get('/bookings', BookingController.getAllBookingDetails);

module.exports= router;