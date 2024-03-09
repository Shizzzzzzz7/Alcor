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
    bookingStatus : {
        type: String,
        enum : ['Upcomming', 'Passed'],
        default: 'Upcomming'
    },
    roomType: {
        type: String,
        enum: ['A','B','C'],
        required: true
    },
    roomNumber: {
        type: Number,
        required: true
    }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;