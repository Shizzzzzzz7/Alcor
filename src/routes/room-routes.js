const express= require("express");
const {RoomController} = require("../controllers/index");

const router= express.Router();

router.post('/rooms', RoomController.createRoom);

module.exports= router;