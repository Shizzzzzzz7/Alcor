const express= require("express");
const {BookingController} = require("../controllers/index");

const router= express.Router();

router.post('/booking', BookingController.bookRoom);

module.exports= router;