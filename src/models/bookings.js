const mongoose = require("mongoose");
const Room = require("./index");

const bookingSchema = new mongoose.Schema({
    userEmail : {
        type: String,
        required: true,
        unique: true
    },
    startTime:{
        type: Date,
        required: true
    },
    endTime:{
        type: Date,
        required: true
    },
    totalPrice:{
        type: Number,
        required: true
    },
    room: Room
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;