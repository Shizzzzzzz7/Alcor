const express= require("express");
const {BookingController} = require("../controllers/index");

const router= express.Router();

router.post('/booking', BookingController.bookRoom);
router.patch('/booking/:id', BookingController.updateDetails);

module.exports= router;